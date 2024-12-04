import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
