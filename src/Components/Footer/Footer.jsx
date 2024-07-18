import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Made with ❤️ by Ajay Kumar Gupta</p>
      <ul>
        <li>
          <a href="https://github.com/akgupta55/" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/a_k_gupta555/" target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ajay-kumar-gupta-011a021b5/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
