import {motion} from "framer-motion"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const howitworks = [
  {
    num: "01",
    heading: "Upload Photos",
    content: "Photographers upload memories from the event securely.",
  },
  {
    num: "02",
    heading: "Upload a Selfie",
    content: "Guests simply upload a selfie. No account or signup required.",
  },
  {
    num: "03",
    heading: "AI Finds Your Photos",
    content: "Our AI instantly matches faces and delivers every photo you're in.",
  },
];
function HowItWorks(){
  return (
    <section
      id="working"
      className="min-h-[100vh] max-w-6xl bg-black mx-auto pt-10 px-33"
    >
      <div className="text-center mb-[80px]">
        <p className="text-[#868686] text-[20px]">How It Works</p>
        <h1 className="text-white text-[56px] font-bold">
          Finding your memories has never been easier.
        </h1>
      </div>
      <motion.div variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }} className="flex flex-col gap-6 max-w-2xl mx-auto">
        {howitworks.map((h,i)=>(
            <motion.div variants={cardVariants} whileHover={{
                y:-10,
                scale:1.02,
            }} transition={{
                duration:0.8,
                delay:i*0.2
            }}  key={i} className="bg-black border rounded-[32px] border-[#232323] border-solid p-5">
          <div className="flex items-center gap-15 h-[120px]">
            <div className="bg-white text-center text-black font-bold text-xl rounded-full h-10 w-10 flex items-center justify-center">
              {h.num}
            </div>
            <div className="text-left">
              <h1 className="text-white font-bold text-lg mb-5">{h.heading}</h1>
              <p className="text-[#868686] font-medium text-md">
                {h.content}
              </p>
            </div>
          </div>
        </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


export default HowItWorks;
