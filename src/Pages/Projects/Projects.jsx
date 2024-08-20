import Particles from "../../Components/Background/Particles";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Projects.css";
import project1 from "../../assets/Project1.png";
import project2 from "../../assets/Project2.png";
import project3 from "../../assets/Project3.png";
import project4 from "../../assets/Project4.png";

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
          <div className="project_item">
            <img src={project1} alt="" />
            <div className="des">
              <h2>RENTAL HOUSEHOLD</h2>
              <p>
                This is a web application built using the MERN (MongoDB,
                Express.js, React, Node.js) stack. It is a Rental website where
                you can rent household items.
              </p>
              <div className="features">
                <h3># Features</h3>
                <ul>
                  <li>
                    Developed a full-stack e-commerce website using MERN
                    (MongoDB, Express.js, React.js, Node.js) stack, integrating
                    Bootstrap for responsive design and layout.
                  </li>
                  <li>
                    Implemented Braintree payment gateway for secure online
                    transactions, allowing users to make payments using various
                    cards.
                  </li>
                  <li>
                    Utilized JWT for user authentication and sessions
                    management, ensuring secure signup, login, and role-based
                    access control for both users and administrators.
                  </li>
                  <li>
                    Integrated bcrypt for password encryption, enhancing user
                    data security. Implemented features including product
                    search, cart management, user dashboard for profile editing
                    and order tracking, and admin dashboard for category and
                    product management, order tracking, and user management.
                    Included notification pop-ups for user actions like login,
                    logout, checkout, and added product suggestions on product
                    detail pages for enhanced user experience.
                  </li>
                </ul>
              </div>
              <a
                href="https://github.com/akgupta55/RentalHousehold"
                target="_blank"
              >
                LIVE DEMO
              </a>
            </div>
          </div>
          {/* project 2 */}
          <div className="project_item">
            <img src={project2} alt="" />
            <div className="des">
              <h2>LIBRARY MANAGEMENT SYSTEM</h2>
              <p>
                This is a web application built using the MERN (MongoDB,
                Express.js, React, Node.js) stack. It is a library management
                system that allows users to Search and Request Book to the
                Admin.
              </p>
              <div className="features">
                <h3># Features</h3>
                <ul>
                  <li>User authentication</li>
                  <li>Role based login (user /admin)</li>
                  <li>
                    User can View, Search, Request books also give
                    recommendation of a book
                  </li>
                  <li>
                    Admin can Accept/Decline Request and CRUD user and books
                  </li>
                </ul>
              </div>
              <a href="https://github.com/akgupta55/LMS" target="_blank">
                LIVE DEMO
              </a>
            </div>
          </div>
          {/* project 3 */}
          <div className="project_item">
            <img src={project3} alt="" />
            <div className="des">
              <h2>CLOTH MART</h2>
              <p>
                This is a web application built using the react.js. Where you
                can see cloths product of different categories.
              </p>
              <div className="features">
                <h3># Features</h3>
                <ul>
                  <li>User Friendly UI</li>
                  <li> View product details</li>
                  <li> Different product categories list</li>
                </ul>
              </div>
              <a href="https://github.com/akgupta55/ClothMart" target="_blank">
                LIVE DEMO
              </a>
            </div>
          </div>
          {/* project 4 */}
          <div className="project_item">
            <img src={project4} alt="" />
            <div className="des">
              <h2>TITAN WATCHES CLONE</h2>
              <p>
                This is a web application built using the react.js. Where you
                can see watches of different categories.
              </p>
              <div className="features">
                <h3># Features</h3>
                <ul>
                  <li>User Friendly UI</li>
                  <li> View product details</li>
                  <li> Different product categories list</li>
                </ul>
              </div>
              <a
                href="https://github.com/akgupta55/Titan-watches-clone"
                target="_blank"
              >
                LIVE DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
