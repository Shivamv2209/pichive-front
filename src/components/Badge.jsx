import {useNavigate} from "react-router-dom"

export default function Badge() {
  const navigate = useNavigate();
  const handleCreate = ()=>{
    navigate("/create-event")
  }
  const handleSend = ()=>{
    navigate("/findPhotos")
  }

  return (
    <section className="max-w-5xl mx-auto px-5 py-20">
      <div className="bg-[#121111] rounded-[32px] px-6 py-12 md:px-10 md:py-16 text-center">

        <h1 className="text-white font-bold text-3xl md:text-5xl leading-tight mb-6">
          Ready to transform
          <br className="hidden md:block" />
          {" "}your event experience?
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-[#868686] text-base md:text-xl leading-relaxed">
            Let PICHIVE turn thousands of photos into memories that matter.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={handleCreate} className="w-full sm:w-auto bg-white text-black font-medium px-6 py-3 rounded-2xl hover:bg-[#868686] transition">
            Create Your First Event
          </button>

          <button onClick={handleSend} className="w-full sm:w-auto text-[#868686] hover:text-white transition">
            Find My Photos
          </button>
        </div>

      </div>
    </section>
  );
}