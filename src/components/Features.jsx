import { motion } from "framer-motion";
import v1 from "../assets/videos/ai.mp4";
import v2 from "../assets/videos/cloud.mp4";
import v3 from "../assets/videos/search.mp4";

const features = [
  {
    title: "AI Face Recognition",
    description:
      "Our advanced AI scans thousands of event photos and identifies you instantly with high accuracy.",
    video: v1,
  },
  {
    title: "Secure Cloud Storage",
    description:
      "All your photos are securely stored and delivered without compromising quality.",
    video: v2,
  },
  {
    title: "Instant Photo Search",
    description:
      "Upload a selfie and instantly receive every event photo you're in.",
    video: v3,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto px-5 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.2rem] text-[#868686] text-sm">
          Features
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
          Built for photographers
          <br className="hidden md:block" />
          and memories.
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="bg-[#121212] border border-[#2a2a2a] rounded-[32px] p-6"
          >
            {/* Video */}
            <div className="overflow-hidden rounded-[24px] mb-6">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[250px] object-cover"
              >
                <source src={feature.video} />
              </video>
            </div>

            <h2 className="text-white text-2xl font-bold mb-4">
              {feature.title}
            </h2>

            <p className="text-[#868686] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}