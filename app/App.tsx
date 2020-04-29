import React from "react";

import Showcase from "../components/showcase/showcase";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Menu from "../components/menu/menu";
import Header from "../components/header/header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
