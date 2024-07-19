import logo from "/logo.png";
import "./Banner.css";
// import Particles from "../Background/Particles";

const Banner = () => {
  return (
    <div className="banner">
      {/* <Particles id="particles" /> */}
      <div className="left">
        <p>
          <h2>
            Hello! <span className="wave">👋🏻</span> My Name is{" "}
          </h2>
          <h1> Ajay Kumar Gupta </h1> and I have recently completed B.Tech in
          Computer Science and Engineering at Kashi Institute Of Technology,
          Varanasi, Uttar Pradesh, India. <br />
          I am passionate About technologies like; MERN Stack, React
          development.
          <br />
          <br />
          Currently, I am working in Acxiom Consulting Pvt. Ltd. at IT and
          Infrastructure team as a Trainee - Technical.
        </p>
        {/* <a
          className="download-resume"
          target="_blank"
          href="https://drive.google.com/file/d/12LKiWoG--Nei8T75UYzx7-lrUM1Hcqag/view?usp=sharing"
        >
          Download Resume
        </a>
        <div className="icons">
          <i className="bx bxl-instagram"></i>
          <i className="bx bxl-github"></i>
          <i className="bx bxl-linkedin-square"></i>
        </div> */}
      </div>
      <div className="right">
        <div className="logoImg">
          <img src={logo} loading="eager|lazy" />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Banner;
