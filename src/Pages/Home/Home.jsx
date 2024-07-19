import Banner from "../../Components/Banner/Banner";
import FindMe from "../../Components/FindMe/FindMe";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Skills from "../../Components/Skills/Skills";
import Particles from "../../Components/Background/Particles";

const Home = () => {
  return (
    <div>
      <Particles id="particles" />
      <Navbar />
      <Banner />
      <Skills />
      <FindMe />
      <Footer />
    </div>
  );
};

export default Home;
