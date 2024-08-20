import "./Contact.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Particles from "../../Components/Background/Particles";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Msg, setMsg] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3ur5h68", "template_mfdv49s", form.current, {
        publicKey: "GC_A0k_4VdRkbdnH3",
      })
      .then(
        () => {
          toast("✅ Your Message Send Succesfully !");
          console.log("SUCCESS!");
          setEmail("");
          setName("");
          setMsg("");
        },
        (error) => {
          toast("❌ Please Check Network");
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
          <input
            type="text"
            name="user_name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            value={Msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          />
          <input className="submit" type="submit" value="Send" />
        </form>
      </div>
      <Toaster />
      <Footer />
    </>
  );
};

export default Contact;
