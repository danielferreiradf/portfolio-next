import Head from "next/head";
import React from "react";
// import { Helmet } from "react-helmet";

import App from "../app/App";

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <App />
    </main>
  </div>
);

export default Home;
