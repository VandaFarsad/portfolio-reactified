import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stack from "../components/Stack";

const MainScreen = () => {
  return (
    <div>
      <Header />
      <About />
      <Stack />
      <Experience />
      <Footer />
    </div>
  );
};

export default MainScreen;
