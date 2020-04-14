import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import Showcase from "../components/showcase/showcase";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyle /> */}
      <Showcase />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
