import { useState } from "react";
import { Sparkle, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateEventBox() {
  const [name, setEventName] = useState("");
  const [event_code, setEventCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleEvent = async () => {
    try {
      setLoading(true);
      console.log(import.meta.env.VITE_API_URL)
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/events/create-event`,
        { name, event_code, email },
      );
      navigate(`/${event_code}`);
    } catch (err) {
      console.error(err.response?.data);
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#181818] max-w-xl mx-auto text-left rounded-2xl p-6 md:p-8">
      <h1 className="text-lg font-bold text-white mb-3">Event Name</h1>
      <input
        type="text"
        value={name}
        placeholder="TechFest"
        onChange={(e) => setEventName(e.target.value)}
        className="bg-[#868686] w-full rounded-2xl px-4 py-3 outline-none mb-6 text-center"
      />
      <h1 className="text-lg font-bold text-white mb-5">Event Code</h1>
      <input
        type="text"
        value={event_code}
        placeholder="TechFest26"
        onChange={(e) => setEventCode(e.target.value)}
        className="bg-[#868686] w-full rounded-2xl px-4 py-3 outline-none mb-6 text-center"
      />
      <h1 className="text-lg font-bold text-white mb-5">Event Owner Email</h1>
      <input
        type="email"
        value={email}
        placeholder="you@example.com"
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[#868686] w-full rounded-2xl px-4 py-3 outline-none mb-2 text-center"
      />
      {/* <div>
        <ul className="mt-4 space-y-2">
          <li className="text-[#868686] text-sm mb-2">Examples:</li>
          <li className="text-[#868686] text-sm mb-2">
            Ross and Emily's Wedding
          </li>
          <li className="text-[#868686] text-sm mb-2">TechFest 2026</li>
          <li className="text-[#868686] text-sm mb-2">
            College Farewell Night
          </li>
        </ul>
      </div> */}
      <div className="text-center mb-12">
        <p className="text-[#868686] text-sm md:text-base leading-relaxed">
        {/* Give your event a memorable name so guests can recognize it. */}
        We'll send your secure upload key to this email.
      </p>
      </div>
      <button
        disabled={loading}
        onClick={handleEvent}
        className="flex items-center justify-center gap-2 bg-white font-bold w-full md:w-[250px] mx-auto rounded-xl p-3 mt-8 hover:bg-[#767676] transition-colors">
        {loading ? (
          <>
            <RefreshCw className="h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          <>
            <Sparkle className="h-4 w-4" />
            Create Event
          </>
        )}
      </button>
    </div>
  );
}

export default CreateEventBox;
