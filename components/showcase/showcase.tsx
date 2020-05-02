import React from "react";
import Link from "next/link";

import { ShowcaseContainer } from "./showcase.styles";

const Showcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <section id="home">
        <div>
          <h1>Daniel Ferreira</h1>
          <h2>Front End Developer</h2>
          <Link href="#sobre">
            <a>Sobre mim</a>
          </Link>
          <div>
            <Link
              href="https://www.github.com/danielferreiradf"
              passHref={true}
            >
              <a target="_blank">
                <img src="/assets/images/icons/github.svg" alt="Github" />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/in/danielferreiradf/"
              passHref={true}
            >
              <a target="_blank">
                <img src="/assets/images/icons/linkedin.svg" alt="Github" />
              </a>
            </Link>

            <Link href="https://www.twitter.com/danferreiradfs" passHref={true}>
              <a target="_blank">
                <img src="/assets/images/icons/twitter.svg" alt="Github" />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <img src="/assets/images/profile.jpg" alt="Imagem de Perfil" />
        </div>
      </section>
    </ShowcaseContainer>
  );
};

export default Showcase;
