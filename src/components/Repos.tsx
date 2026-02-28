import "../css/Repos.css";
import arrow from "../assets/arrow.svg";
import { use, useEffect, useState } from "react";
type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Repos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vaaandus/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);
  return (
    <div className="repos-container">
      <h1 className="repos-title">My Repositories</h1>
      <div className="repos-cards">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="card-title">{repo.name}</h2>
            <p className="card-description">
              {repo.description
                ? repo.description
                : "No description available."}
            </p>
            <img src={arrow} className="card-arrow" />
          </a>
        ))}
      </div>
    </div>
  );
}
