import "../css/Intro.css";
import bg from "../assets/bg.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import { motion } from "framer-motion";

export default function Intro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="center">
      <img src={bg} className="bg" alt="Background" />

      <motion.div
        className="intro"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={itemVariants} className="title">
          Veli Deniz B.
        </motion.h1>

        <motion.p variants={itemVariants} className="title-des">
          Student <span className="brand-dot">•</span> Developer
        </motion.p>

        <motion.div variants={itemVariants} className="links">
          {/* GitHub */}
          <a
            href="https://github.com/vaaandus"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img src={github} className="link-img" alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/veli-deniz-balc%C4%B1koca-786b05271/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img src={linkedin} className="link-img" alt="LinkedIn" />
          </a>

          <a
            href="https://www.instagram.com/velidenizblck"
            target="_blank"
            rel="noopener noreferrer"
            className="link-wrapper"
          >
            <img src={instagram} className="link-img" alt="Instagram" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
