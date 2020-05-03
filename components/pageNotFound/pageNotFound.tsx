import React from "react";
import { PageNotFoundContainer } from "./pageNotFound.styles";
import Link from "next/link";

const PageNotFound: React.FC = () => {
  return (
    <PageNotFoundContainer>
      <section>
        <img src="/assets/images/dinosaur.svg" alt="Dinosaur" />
        <h1>Página não encontrada</h1>
        <Link href="/">
          <a>Voltar para a homepage</a>
        </Link>
      </section>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;
