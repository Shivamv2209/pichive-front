import { motion } from "framer-motion";
import "../styles/Features.css";
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
    <section id="features" className="features-section">
      <div className="features-header">
        <p>Features</p>
        <h1>Built for photographers and memories.</h1>
      </div>

      <div className="cards-container">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
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
          >
            <div className="feature-video-container">
              <video autoPlay muted loop playsInline className="feature-video">
                <source src={feature.video} />
              </video>
            </div>

            <h2>{feature.title}</h2>

            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
