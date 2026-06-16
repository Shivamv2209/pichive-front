import { motion } from "framer-motion";

function HeroText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="pt-12 md:pt-18 pb-10 px-5"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <h5 className="text-xs md:text-sm text-[#868686]">
          AI-powered event photo retrieval
        </h5>

        <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mt-4">
          Find your event
          <br />
          photos instantly
          <br />
          with AI
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-[#868686] px-2">
          Upload a single selfie and our AI automatically finds every
          photo taken of you across the entire event gallery — in seconds.
          No more searching, no more missing moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-8 w-full sm:w-auto">

          <button className="w-full sm:w-auto text-black text-sm rounded-full bg-white px-6 py-3 hover:bg-[#868686] cursor-pointer font-medium">
            Create Event
          </button>

          <button className="w-full sm:w-auto text-white text-sm rounded-full px-6 py-3 bg-[#3D3D3D] hover:bg-[#252525] hover:text-[#9E9E9E] cursor-pointer font-medium">
            Find Photos
          </button>

        </div>

      </div>
    </motion.section>
  );
}

export default HeroText;