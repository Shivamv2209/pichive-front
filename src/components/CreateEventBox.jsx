import { useState } from "react";
import {Sparkle,RefreshCw} from "lucide-react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

function CreateEventBox() {
    const [name,setEventName] = useState("")
    const [event_code,setEventCode] = useState("")
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate();

    const handleEvent = async ()=>{
      try{
        setLoading(true)
        const result = await axios.post('http://localhost:3000/api/events/create-event',
            {name,event_code,email}
        )
        navigate(`/${event_code}`)
      }catch(err){
          console.log(err.response?.data);
          console.log(err.message);
      }finally{
        setLoading(false)
      }
    }
  return (
    <div className="bg-[#181818] max-w-xl mx-auto text-left h-[585px] rounded-2xl pt-5 px-7">
      <h1 className="text-lg font-bold text-white mb-5">Event Name</h1>
      <input
        type="text"
        value={name}
        placeholder="Event Name"
        onChange={(e)=>setEventName(e.target.value)}
        className="bg-[#808080] border-none w-full rounded-2xl p-2 outline-none mb-4 text-center"
      />
       <h1 className="text-lg font-bold text-white mb-5">Event Code</h1>
      <input
        type="text"
        value={event_code}
        placeholder="Event Code"
        onChange={(e)=>setEventCode(e.target.value)}
        className="bg-[#808080] border-none w-full rounded-2xl p-2 outline-none mb-4 text-center"
      />
       <h1 className="text-lg font-bold text-white mb-5">Event Owner Email</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        className="bg-[#808080] border-none w-full rounded-2xl p-2 outline-none mb-4 text-center"
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
      <button disabled={loading} onClick={handleEvent} className="flex transition-colors items-center font-bold justify-center bg-white mx-auto w-[250px] rounded-xl hover:bg-[#767676] mt-6 p-2 gap-2">
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
