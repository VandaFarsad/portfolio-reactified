import { Stack } from "@mui/material";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
