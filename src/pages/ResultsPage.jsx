import { useLocation, useParams ,Link } from "react-router-dom";
import NavbarPages from "../components/NavbarPages";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

function ResultsPage() {
  const { event_code } = useParams();
  const [event, setEvent] = useState("");
  const location = useLocation();
  const urls = location.state?.urls || []; 
  const imageUrls = urls.map(photo => photo.get_url)
  useEffect(() => {
    async function fetchEvent() {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/events/${event_code}`,
        );
        const event = result.data.event;
        const formatName =
          event.name.charAt(0).toUpperCase() + event.name.slice(1);
        setEvent(formatName);
      } catch (err) {
        console.log(err);
      }
    }
    fetchEvent()
  },[event_code]);

  const handleDownload = async (url, index) => {
  try {
    const a = document.createElement("a");

    a.href = url;
    a.download = `pichive-photo-${index + 1}.jpg`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

  } catch (err) {
    console.log(err);
  }
};


  return (
    <>
      <NavbarPages />
      <div className="max-w-5xl mx-auto mt-40">
        <h1 className="text-white text-4xl font-bold text-center">
          Your Memories from {event}
        </h1>

        <p className="text-[#868686] text-center mt-4 mb-10">
          We found {urls.length} photos featuring you.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {imageUrls.map((u, i) => (
            <div key={i} className="relative w-[180px] h-[180px]">
              <img
                src={u}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
              <button onClick={()=>handleDownload(u,i)} className="absolute top-3 right-3 bg-black/60 cursor-pointer rounded-full p-2 transition-all">
                <Download size={16} className="text-white" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
            <Link className="text-black font-bold px-6 py-3 rounded-2xl bg-white mt-10" to={`/${event_code}`}>Back to the Event</Link>
        </div>
      </div>
    </>
  );
}

export default ResultsPage;
