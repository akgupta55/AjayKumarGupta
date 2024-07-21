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
          <img src="/Project1.png" alt="" />
          <div className="des">
            <h2>PROJECT NO 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              officiis consequatur doloremque eum aspernatur omnis quam labore
              iure reprehenderit tempore, totam excepturi impedit natus
              expedita!
            </p>
            <button>LIVE DEMO</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
