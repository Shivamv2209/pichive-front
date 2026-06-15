import NavbarPages from "../components/NavbarPages";
import {CircleCheckBig} from "lucide-react"
import img1 from "../assets/eventZ/img1.jpg";
import img2 from "../assets/eventZ/img2.jpg";
import img3 from "../assets/eventZ/img3.jpg";
import img4 from "../assets/eventZ/img4.jpg";
import img5 from "../assets/eventZ/img5.jpg";
import img6 from "../assets/eventZ/img6.jpg";
import "../styles/Events.css";
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";

function ConfirmUploads(){
    const location = useLocation();
    const {event_code} = useParams();
    console.log(event_code)
    const uploadCount = location.state?.uploadCount || 0;
    const navigate = useNavigate();
    const goToEvent = ()=>{
        navigate(`/${event_code}`)
    }
    const gotoUploads = ()=>{
        navigate(`/upload/photos/${event_code}`)
    }
    return(
        <>
        <NavbarPages />
        <div className="relative overflow-hidden">
            <img src={img1} alt="" className="photo top-left"/>
            <img src={img2} alt="" className="photo middle-left"/>
            <img src={img3} alt="" className="photo bottom-left"/>
            <img src={img4} alt="" className="photo top-right"/>
            <img src={img5} alt="" className="photo middle-right"/>
            <img src={img6} alt="" className="photo bottom-right"/>
            <div className="mt-10 min-h-screen flex items-center justify-center z-10 relative">
            <div className="h-[500px] w-[500px]">
                <div className="flex flex-col items-center py-5 mb-5">
                        <CircleCheckBig size={60} className="text-white"/>
                </div>
                <div className="text-center">
                    <h1 className="text-white font-bold text-4xl">Upload Complete ✓</h1>
                    <p className="text-[#868686] mt-5 text-xl">{uploadCount} {uploadCount > 1 ? "photos have " : "photo has "}been uploaded and processed successfully.</p>
                    <p className="text-[#868686] mt-5 text-xl">Guests can now find their memories.</p>
                </div>
                <div className="flex items-center justify-center gap-8 mt-7">
                    <Link to={`/${event_code}`} onClick={goToEvent} className="text-black hover:bg-[#868686] bg-white px-5 py-2 rounded-2xl font-medium text-md transition-all duration-300">Go to Event</Link>
                    <Link to={`/upload/photos/${event_code}`} onClick={gotoUploads} className="text-white border border-[#868686] px-5 py-2 text-md rounded-2xl hover:text-black hover:bg-white transition-all duration-300">Upload More Photos</Link>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ConfirmUploads;