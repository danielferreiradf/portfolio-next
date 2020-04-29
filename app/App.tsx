import React, { useContext } from "react";

import Showcase from "../components/showcase/showcase";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Menu from "../components/menu/menu";
import Header from "../components/header/header";

import { MenuProvider } from "../context/menuContext";
import { AppWrapper } from "./app.styles";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <MenuProvider>
        <nav>
          <Menu />
        </nav>
        <section>
          <Header />
          <Showcase />
          <About />
          <Projects />
          <Contact />
        </section>
      </MenuProvider>
    </AppWrapper>
  );
};

export default App;
