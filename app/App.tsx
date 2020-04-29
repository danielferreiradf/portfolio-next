import React, { useContext } from "react";

import Showcase from "../components/showcase/showcase";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Menu from "../components/menu/menu";
import Header from "../components/header/header";

import { MenuProvider } from "../context/menuContext";

const App: React.FC = () => {
  return (
    <>
      <MenuProvider>
        <Header />
        <Menu />
      </MenuProvider>
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
