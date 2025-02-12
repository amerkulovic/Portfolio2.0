import "./App.css";
import "aos/dist/aos.css";
// @ts-ignore
import AOS from "aos";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";

AOS.init();

function App() {
  return (
    <div className="overflow-hidden">
      <Nav />
      <Home />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
