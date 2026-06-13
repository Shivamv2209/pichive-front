import { useState } from "react";
import {Sparkle,RefreshCw} from "lucide-react"

function CreateEventBox() {
    const [eventName,setEventName] = useState("")
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)
  return (
    <div className="bg-[#181818] max-w-xl mx-auto text-left h-[480px] rounded-2xl pt-5 px-7">
      <h1 className="text-lg font-bold text-white mb-5">Event Name</h1>
      <input
        type="text"
        value={eventName}
        placeholder="Event Name"
        onChange={(e)=>setEventName(e.target.value)}
        className="bg-white border-none w-lg rounded-2xl p-2 outline-none mb-4 text-center"
      />
       <h1 className="text-lg font-bold text-white mb-5">Owner's Email</h1>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e)=>setEventName(e.target.value)}
        className="bg-white border-none w-lg rounded-2xl p-2 outline-none mb-4 text-center"
      />
      <div>
        <ul className="mt-2"> 
            <li className="text-[#868686] text-sm mb-2">Examples:</li>
            <li className="text-[#868686] text-sm mb-2">Ross and Emily's Wedding</li>
            <li className="text-[#868686] text-sm mb-2">TechFest 2026</li>
            <li className="text-[#868686] text-sm mb-2">College Farewell Night</li>
        </ul>
      </div>
      <p className="text-[#868686] mt-8">Give your event a memorable name so guests can recognize it.</p>
      <button className="flex items-center justify-center bg-white text- mx-auto w-[250px] rounded-xl hover:bg-[#767676] mt-6 p-2 gap-2">
        {loading ? (
            <>
            <RefreshCw  className="h-4 w-4 animate-spin"/>
            Creating...
            </>
        ):(
            <>
            <Sparkle className="h-4 w-4"/>
            Create Your Event 
            </>
        )}
      </button>
    </div>
  );
}

export default CreateEventBox;
