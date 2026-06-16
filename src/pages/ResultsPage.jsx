import { useLocation, useParams, Link } from "react-router-dom";
import NavbarPages from "../components/NavbarPages";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

function ResultsPage() {
  const { event_code } = useParams();
  const [event, setEvent] = useState("");

  const location = useLocation();
  const urls = location.state?.urls || [];

  const imageUrls = urls.map((photo) => photo.get_url);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const result = await axios.get(
          `http://localhost:3000/api/events/${event_code}`
        );

        const event = result.data.event;

        const formatName =
          event.name.charAt(0).toUpperCase() + event.name.slice(1);

        setEvent(formatName);
      } catch (err) {
        console.log(err);
      }
    }

    fetchEvent();
  }, [event_code]);

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

      <div className="max-w-6xl mx-auto px-5 mt-24 md:mt-40">

        <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
          Your Memories from {event}
        </h1>

        <p className="text-[#868686] text-center mt-4 mb-10 text-sm md:text-base">
          We found {urls.length} photos featuring you.
        </p>

        {/* Empty State */}
        {urls.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-white text-2xl font-bold">
              No photos found 😔
            </h2>

            <p className="text-[#868686] mt-4">
              Try taking another selfie with better lighting.
            </p>

            <Link
              to={`/search/${event_code}`}
              className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-2xl font-medium"
            >
              Try Again
            </Link>
          </div>
        ) : (
          <>
            {/* Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

              {imageUrls.map((u, i) => (
                <div key={i} className="relative">

                  <img
                    src={u}
                    alt=""
                    className="w-full aspect-square object-cover rounded-2xl"
                  />

                  <button
                    onClick={() => handleDownload(u, i)}
                    className="absolute top-3 right-3 bg-black/60 rounded-full p-2 hover:bg-black/80 transition-all"
                  >
                    <Download size={16} className="text-white" />
                  </button>

                </div>
              ))}
            </div>

            {/* Back button */}
            <div className="flex justify-center mt-12 mb-10">
              <Link
                to={`/${event_code}`}
                className="bg-white text-black font-bold px-6 py-3 rounded-2xl hover:bg-[#868686] transition-all"
              >
                Back to Event
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ResultsPage;