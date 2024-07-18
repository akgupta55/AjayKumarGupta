import Banner from "../../Components/Banner/Banner";
import FindMe from "../../Components/FindMe/FindMe";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <FindMe />
      <Footer />
    </div>
  );
};

export default Home;
