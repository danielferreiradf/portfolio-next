import React from "react";
import { AboutContainer } from "./about.styles";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <section id="sobre">
        <h1>Sobre mim</h1>
        <h2>Informações sobre o desenvolvedor</h2>
        <p>
          Sou Daniel, um desenvolvedor Web entusiasta por tecnologia, em como as
          tecnologias funcionam e como o mundo evolui.
        </p>
        <p>
          Sempre fui bastante fascinado por computadores, e é por isso que
          decidi trabalhar na área de desenvolvimento. Através disso, em
          programação pude encontrar algo que eu possa criar soluções inovadoras
          para problemas e manter minha mente ativa e sempre disposta a buscar
          novos conhecimentos.{" "}
        </p>
        <h3>Skills</h3>
        <ul>
          <li>• HTML</li>
          <li>• Node.js</li>
          <li>• CSS</li>
          <li>• SQL - NoSQL</li>
          <li>• JavaScript - TypeScript</li>
          <li>• Git</li>
          <li>• SASS - Styled Components</li>
          <li>• Jest</li>
          <li>• ReactJS - Redux</li>
          <li>• Photoshop</li>
          <li>• Responsive Design</li>

          {/* <li>• Node.js</li>
          <li>• SQL- NoSQL</li>
          <li>• Git</li>
          <li>• Jest</li>
          <li>• Photoshop</li> */}
        </ul>
      </section>
    </AboutContainer>
  );
};

export default About;
