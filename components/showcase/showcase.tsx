import React from "react";
import { ShowcaseContainer } from "./showcase.styles";

const Showcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <section>
        <div>
          <h1>Daniel Ferreira</h1>
          <h2>Front End Developer</h2>
          <a href="#contato">Sobre mim</a>
        </div>
        <div>
          <img src="/assets/images/profile.jpg" alt="Imagem de Perfil" />
        </div>
      </section>
    </ShowcaseContainer>
  );
};

export default Showcase;
