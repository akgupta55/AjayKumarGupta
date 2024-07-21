import Particles from "../../Components/Background/Particles";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Projects.css";

const Project = () => {
  return (
    <>
      <Navbar />
      <Particles id="particles" />
      <div className="project">
        <h1>
          See My <span className="sub_heading">Works</span>
        </h1>
        <div className="project_list">
          <img src="" alt="" />
          <div className="des">
            <h2></h2>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
