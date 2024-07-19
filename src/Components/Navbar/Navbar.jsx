import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black text-white fixed-top">
      <div className="container-fluid ms-6">
        <Link className="navbar-brand logo" to="/">
          {"</Ajay_Kumar_Gupta>"}
        </Link>
        <button
          className="navbar-toggler bg-white"
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
              <NavLink
                // className="nav-link text-white"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                to="/"
                exact
              >
                <img src="/person_icons.png" /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // className="nav-link "
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/projects"
              >
                <img src="/project_icons.png" /> Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // className="nav-link "
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/contact"
              >
                <img src="/contact_icons.png" alt="" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
