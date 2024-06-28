import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const jumpToExperienceDiv = (id) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black text-white fixed-top">
      <div className="container-fluid ms-6">
        <Link className="navbar-brand logo" to="/">
          {"</Ajay_Kumar_Gupta>"}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse me-4" id="navbarNav">
          <ul className="navbar-nav ms-auto text-white">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Exprince
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="#">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
