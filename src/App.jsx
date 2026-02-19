import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import About from "./components/About";
import Contacts from "./components/Contacts";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Contacts />
    </>
  );
}

export default App;
