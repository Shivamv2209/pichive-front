import { motion } from "framer-motion";

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
    content:
      "Photographers upload memories from the event securely.",
  },
  {
    num: "02",
    heading: "Upload a Selfie",
    content:
      "Guests simply upload a selfie. No account or signup required.",
  },
  {
    num: "03",
    heading: "AI Finds Your Photos",
    content:
      "Our AI instantly matches faces and delivers every photo you're in.",
  },
];

function HowItWorks() {
  return (
    <section
      id="working"
      className="max-w-6xl mx-auto px-5 md:px-10 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-[#868686] text-sm md:text-lg">
          How It Works
        </p>

        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mt-4">
          Finding your memories
          <br className="hidden md:block" />
          {" "}has never been easier.
        </h1>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-6 max-w-3xl mx-auto"
      >
        {howitworks.map((h, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="border border-[#232323] rounded-[32px] p-6 bg-black"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Number */}
              <div className="bg-white text-black font-bold text-lg rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                {h.num}
              </div>

              {/* Text */}
              <div>
                <h2 className="text-white font-bold text-xl mb-3">
                  {h.heading}
                </h2>

                <p className="text-[#868686] leading-relaxed">
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