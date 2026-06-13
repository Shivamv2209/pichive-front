import {motion} from "framer-motion"

function HeroText() {
  return (
     <motion.section
     initial={{opacity:0,y:40}}
     animate={{opacity:1,y:0}}
     transition={{
      duration:0.8,
      ease:"easeOut"
     }}
      className="pt-18 pb-10 ">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h5 className="text-sm text-[#868686]">AI-powered event photo retrieval</h5>
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
          Find your event
          <br />
          photos instantly
          <br />
          with AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-[#868686]">
          Upload a single selfie and our AI automatically finds every
          photo taken of you across the entire event gallery — in seconds.
          No more searching, no more missing moments.
        </p>
         <div className="flex items-center gap-2 pt-4">
            <button className="text-black text-sm rounded-full border-b bg-white p-3 hover:bg-[#868686] cursor-pointer font-medium">Create Event</button>
         <button className="text-white text-sm border-b border-[#3D3D3D] rounded-full p-3 bg-[#3D3D3D] hover:bg-[#252525] hover:bg-[#252525] hover:text-[#9E9E9E] cursor-pointer font-medium">Find Photos</button>
         </div>
      </div>
    </motion.section>
  );
}

export default HeroText;
