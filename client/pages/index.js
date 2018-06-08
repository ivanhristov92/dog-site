import React from "react";
import Nav from "../components/navigation";
import Head from  "next/head";

const fn = () => (
  <div>
    <div className={"container"}>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />

      </Head>
      <Nav />
    </div>
  </div>
);

export default fn;

