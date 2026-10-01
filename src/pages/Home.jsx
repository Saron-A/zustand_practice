import Navbar from "../components/Navbar";
import Hero from "../components/hero.jsx";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
