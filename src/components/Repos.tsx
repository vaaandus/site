import "../css/Repos.css";
import arrow from "../assets/arrow.svg";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

export default function Repos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vaaandus/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardsContainerRef.current) return;
    const cards = cardsContainerRef.current.getElementsByClassName("card");
    for (const card of Array.from(cards)) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.div
      className="repos-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="section-eyebrow">My Repositories</h2>

      <motion.div
        className="repos-cards"
        ref={cardsContainerRef}
        onMouseMove={handleMouseMove}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {repos.map((repo) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            <div className="card-content">
              <div className="card-header">
                <h2 className="card-title">{repo.name}</h2>
                <img src={arrow} className="card-arrow" alt="Go to repo" />
              </div>

              <p className="card-description">
                {repo.description
                  ? repo.description
                  : "No description available for this repository."}
              </p>

              <div className="card-footer">
                {repo.language && (
                  <span className="badge language-badge">
                    <span className="language-dot"></span> {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="badge star-badge">
                    ⭐ {repo.stargazers_count}
                  </span>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
