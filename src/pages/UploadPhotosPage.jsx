import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import NavbarPages from "../components/NavbarPages";
import { UploadIcon, X } from "lucide-react";
import axios from "axios";

function UploadPhotosPage() {
  const { event_code } = useParams();
  const [event, setEvent] = useState(null);
  const [upload_key, setUploadKey] = useState("");
  const [photos, setPhotos] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("");
  const fileInputRef = useRef(null);
  const MAX_FILES = 20;
  const navigate = useNavigate();

  const addFiles = (newFiles) => {
    const combined = [...photos, ...newFiles];

    const uniqueFiles = combined.filter(
      (file, index, self) =>
        index ===
        self.findIndex((f) => f.name === file.name && f.size === file.size),
    );

    if (uniqueFiles.length > MAX_FILES) {
      alert("You can only upload 20 photos at a time");
      return;
    }
    setPhotos(uniqueFiles);
  };

  //browse files
  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  //Drag and drop

  const handleDrop = (e) => {
    e.preventDefault();

    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  //remove photo
  const removePhoto = (index) => {
  const updated = photos.filter((_, i) => i !== index);
  setPhotos(updated);

  if (updated.length === 0 && fileInputRef.current) {
    fileInputRef.current.value = "";
  }
};
  //clear all
  const clearAll = () => {
    setPhotos([]);
    if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }
  };

  //handleUpload
  const handleUpload = async () => {
    try {
      setUploading(true);
      setStage("Upload Starts");
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/photos/${event_code}`,
        {
          upload_key,
          files: photos.map((photo) => ({
            contentType: photo.type,
          })),
        },
      );

      const uploads = result.data.uploads;
      const totalfiles = uploads.length;
      for (let i = 0; i < uploads.length; i++) {
        await axios.put(uploads[i].upload_url, photos[i], {
          headers: {
            "Content-Type": photos[i].type,
          },
        });
        const percent = Math.round(((i + 1) / totalfiles) * 80);
        setProgress(percent);
      }

      setStage("Processing Faces");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/photos/${event_code}/confirm`,
        {
          upload_key,
          photos: uploads.map((upload) => ({
            photo_id: upload.photo_id,
            s3_key: upload.s3_key,
          })),
        },
      );

      if (res.data.message === "all upload done") {
        navigate(`/uploads/${event_code}/confirm`, {
          state: {
            uploadCount: uploads.length,
          },
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    async function fetch() {
      try {
        const result = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/events/${event_code}`,
        );
        const event = result.data.event;
        const formatName =
          event.name.charAt(0).toUpperCase() + event.name.slice(1);
        setEvent(formatName);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, [event_code]);
  return (
    <>
      <NavbarPages />
      <div className="max-w-4xl flex flex-col items-center mx-auto mt-24 md:mt-32 px-5">
        {event ? (
          <>
            <h1 className="text-white font-bold text-3xl md:text-5xl text-center">
              Upload Your Photos
            </h1>
            <p className="text-[#868686] mt-3 mb-5 md:mb-15">
              Securely upload event memories...
            </p>
            <div className="bg-[#1e1e1e] text-center w-full max-w-[520px] rounded-[32px] p-6 md:px-10">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-5">
                <p className="text-white font-medium text-lg">
                  Event Name: {event}
                </p>
                <p className="text-white font-medium text-lg">
                  Event Code : {event_code}
                </p>
              </div>
              <input
                type="text"
                value={upload_key}
                placeholder="Upload Key"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setUploadKey(e.target.value)}
                className="bg-[#808080] border-none w-full rounded-2xl p-2 outline-none mb-4 text-center mt-10"
              />
              <p className="text-[#868686] text-sm">
                Use the upload key shared by the event organizer.
              </p>
              <div
                onClick={() => fileInputRef.current.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                className="flex hover:border-white/30 transition-all duration-300 border rounded-[32px] border-dashed border-[#868686] p-4 cursor-pointer flex-col items-center gap-2 mt-7 mb-4"
              >
                <UploadIcon size={40} className="text-white" />
                <p className="text-[#868686]">Drag and drop photos here</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  accept=".jpg,.jpeg,.png"
                  multiple
                  hidden
                  placeholder="Browse Files"
                />
                <button
                  className="p-2 mt-2 hover:bg-[#868686] rounded-[32px] bg-white text-black text-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  Browse Files
                </button>
              </div>
              <p className="text-[#868686] text-xs">
                You can Upload only 20 photos at a time
              </p>
            </div>
            {photos.length > 0 && !uploading && (
              <p className="text-[#868686] mt-6 font-medium text-md">
                {photos.length}/20 photos selected{" "}
              </p>
            )}
            {photos.length > 0 && !uploading && (
              <>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
                  {photos.length < 20 && (
                    <button
                      className="bg-white text-black px-5 py-2 rounded-xl"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Add More
                    </button>
                  )}
                  <button
                    onClick={clearAll}
                    className="border hover:bg-red-500 hover:text-white transition-all duration-300 border-red-500 text-red-500 px-5 py-2 rounded-xl"
                  >
                    Clear All
                  </button>
                </div>
              </>
            )}
            {photos.length > 0 && !uploading && (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-full">
                  {photos.map((p, i) => (
                    <div key={i} className="relative">
                      <img
                        src={URL.createObjectURL(p)}
                        alt=""
                        className="w-full aspect-square object-cover rounded-2xl"
                      />
                      <button
                        className="absolute top-2 right-2 bg-black/70 rounded-full p-1"
                        onClick={() => removePhoto(i)}
                      >
                        <X size={18} className="text-white" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="w-full">
                  <button
                    onClick={handleUpload}
                    className="w-full hover:bg-[#868686] bg-white text-black font-semibold rounded-2xl py-4 mt-6"
                  >
                    Upload Photos
                  </button>
                </div>
              </>
            )}
            {(uploading || progress == 100) && (
              <>
                <div className="w-full mt-10 bg-[#2a2a2a] rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl text-center mt-4">{stage}</h3>
                <p className="text-[#868686] mt-2 text-center">{progress}%</p>
              </>
            )}
          </>
        ) : (
          <p>loading..</p>
        )}
      </div>
    </>
  );
}

export default UploadPhotosPage;
