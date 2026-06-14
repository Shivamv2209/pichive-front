import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarPages from "../components/NavbarPages";
import {UploadIcon} from "lucide-react"
import axios from "axios";

function UploadPhotosPage() {
  const { event_code } = useParams();
  const [event, setEvent] = useState(null);
  const [upload_key, setUploadKey] = useState("");
  useEffect(() => {
    async function fetch() {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/events/${event_code}`,
        );
        console.log(result.data);
        const event = result.data.event;
        setEvent(event);
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, [event_code]);
  return (
    <>
      <NavbarPages />
      <div className="max-w-3xl flex flex-col items-center mx-auto mt-40 p-15">
        {event ? (
          <div className="bg-[#1e1e1e] text-center h-[500px] w-[520px] rounded-[32px] pt-6 px-10">
            <h1 className="text-white font-bold text-xl">Upload Your Photos</h1>
            <p className="text-[#868686] mt-3">
              Securely upload event memories...
            </p>
            <div className="flex gap-8 items-center justify-center mt-5">
              <p className="text-white font-medium text-lg">
                Event Name: {event.name}
              </p>
              <p className="text-white font-medium text-lg">
                Event Code : {event_code}
              </p>
            </div>
            <input
              type="text"
              value={upload_key}
              placeholder="Upload Key"
              onChange={(e) => setUploadKey(e.target.value)}
              className="bg-[#808080] border-none w-full rounded-2xl p-2 outline-none mb-4 text-center mt-10"
            />
            <p className="text-[#868686] text-sm">The upload key was sent to the event owner's email.</p>
            <div className="">
                <UploadIcon />
                <input type="file" />
            </div>
            <button>Upload Photos</button>
          </div>
        ) : (
          <p>loading..</p>
        )}
      </div>
    </>
  );
}

export default UploadPhotosPage;
