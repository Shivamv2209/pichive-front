import { useState } from "react";
import { Sparkle, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FindPhotosBox() {

  const [event_code, setEventCode] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSend = ()=>{
    navigate(`/${event_code}`)
  }
  return (
    <div className="bg-[#181818] max-w-xl mx-auto text-left rounded-2xl p-6 md:p-8">
      <h1 className="text-lg font-bold text-white mb-5">Event Code</h1>
      <input
        type="text"
        value={event_code}
        placeholder="Event Code"
        onChange={(e) => setEventCode(e.target.value)}
        className="bg-[#868686] w-full rounded-2xl px-4 py-3 outline-none mb-6 text-center"
      />
      <button
        disabled={loading}
        onClick={handleSend}
        className="flex items-center justify-center gap-2 bg-white font-bold w-full md:w-[250px] mx-auto rounded-xl p-3 mt-8 hover:bg-[#767676] transition-colors">
        {loading ? (
          <>
            <RefreshCw className="h-4 w-4 animate-spin" />
            Creating...
          </>
        ) : (
          <>
            <Sparkle className="h-4 w-4" />
            Go To Your Event
          </>
        )}
      </button>
    </div>
  );
}

export default FindPhotosBox;
