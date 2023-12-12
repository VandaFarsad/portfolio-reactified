import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Stack />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
