import "../css/About.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="section-eyebrow">About Me</h2>
      <p className="about-text">
        I'm an Electrical-Electronics Engineering student based in Aydın,{" "}
        <span className="highlight brand-blue">Türkiye</span>. I love learning
        new technologies, with a main focus on game development and programming.
        Currently, I'm building a game called{" "}
        <span className="highlight brand-blue">BUSINGO</span> with my friends.
      </p>
    </motion.div>
  );
}
