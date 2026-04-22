import "../css/Busingo.css";
import { motion } from "framer-motion";

export default function Busingo() {
  const techStack = [
    "Unity 6",
    "1-4 Player Co-op",
    "Survival",
    "Base Building",
    "Procedural Generation",
    "Low-Poly",
  ];

  return (
    <motion.section
      className="busingo-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-eyebrow">Featured Project</h2>

      <div className="busingo-content-wrapper">
        <div className="busingo-header">
          <span className="project-status">Coming Soon to Steam</span>
          <h1 className="busingo-title">BUSINGO</h1>
          <div className="busingo-tags">
            {techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="busingo-content">
          <p className="busingo-description">
            BUSINGO is a 1-4 player co-op survival game centered around driving
            and maintaining a moving bus. Escape from relentless cartel attacks,
            scavenge for resources, and survive in an endless, procedurally
            generated desert.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <h3>Moving Base</h3>
              <p>
                Scavenge for wood, repair windows, and customize your moving
                base while on the run.
              </p>
            </div>
            <div className="feature-item">
              <h3>Co-op Survival</h3>
              <p>
                Distribute roles like driving, gathering, and defending with up
                to 4 friends.
              </p>
            </div>
            <div className="feature-item">
              <h3>Cartel Attacks</h3>
              <p>
                Defend against relentless pursuits and raid desert outposts for
                better loot.
              </p>
            </div>
            <div className="feature-item">
              <h3>Procedural World</h3>
              <p>
                Every run is unique. Face dynamically generated roads and
                obstacles.
              </p>
            </div>
          </div>

          <a
            href="https://store.steampowered.com/app/4576830/BUSINGO/"
            target="_blank"
            rel="noopener noreferrer"
            className="steam-button"
          >
            View on Steam
          </a>
        </div>
      </div>
    </motion.section>
  );
}
