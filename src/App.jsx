import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Project from "./components/Project";
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
      <Project />
      {/* <Skills /> */}
      <Contacts />
      
    </>
  );
}

export default App;
