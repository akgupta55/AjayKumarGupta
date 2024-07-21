import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Particles from "../../Components/Background/Particles";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Particles id="particles" />
      <div className="contact">
        <h1>
          <span className="sub_heading">Contact</span> Me
        </h1>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
