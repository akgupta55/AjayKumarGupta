import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Particles from "../../Components/Background/Particles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3ur5h68", "template_mfdv49s", form.current, {
        publicKey: "GC_A0k_4VdRkbdnH3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <Particles id="particles" />
      <div className="contact">
        <h1>
          <span className="sub_heading">Contact</span> Me
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
