import React from "react";
import { AboutContainer } from "./about.styles";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <section id="sobre">
        <h1>Sobre mim</h1>
        <h2>Informações sobre o desenvolvedor</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque
          architecto voluptates neque saepe velit eveniet sit asperiores atque
          repudiandae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magnam
          facilis vero tempora hic fuga, fugit voluptatem sunt natus distinctio
          sequi dolorum aliquam praesentium eius libero illum! Magni, sint
          dignissimos?
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
