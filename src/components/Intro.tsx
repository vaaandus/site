import "../css/Intro.css";
import bg from "../assets/bg.png";
import github from "../assets/github.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

export default function Intro() {
  return (
    <div className="center">
      <img src={bg} className="bg" />
      <div className="intro">
        <h1 className="title">Veli Deniz B.</h1>
        <p className="title-des">Student & Developer</p>
        <div className="links">
          <a href="https://github.com/vaaandus" target="_blank">
            <img src={github} className="link-img" />
          </a>
          <a href="https://www.instagram.com/velidenizblck" target="_blank">
            <img src={instagram} className="link-img" />
          </a>
          <a href="" target="_blank">
            <img src={linkedin} className="link-img" />
          </a>
        </div>
      </div>
    </div>
  );
}
