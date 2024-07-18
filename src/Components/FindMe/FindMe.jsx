import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./FindMe.css";

const FindMe = () => {
  return (
    <div className="findme">
      <h1>Find Me On</h1>
      <p>
        Feel free to <span className="sub_heading">connect</span> with me
      </p>
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

export default FindMe;
