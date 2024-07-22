import Particles from "../../Components/Background/Particles";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Projects.css";
import project_list from "../../assets/project_data";

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
          {project_list.map((item, i) => {
            return (
              <div className="project_item" key={i}>
                <img src={item.image} alt="" />
                <div className="des">
                  <h2>{item.heading}</h2>
                  <p>{item.des}</p>
                  <a href={item.link} target="_blank">
                    LIVE DEMO
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
