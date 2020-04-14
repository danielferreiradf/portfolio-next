import Head from "next/head";
import React from "react";

import App from "../app/App";

const Home: React.FC = () => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <App />
    </main>
  </div>
);

export default Home;
