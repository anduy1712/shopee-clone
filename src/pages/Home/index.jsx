import React from "react";
import Adver from "./Adver";
import Product from "./Product";
import Sale from "./Sale";

const Home = () => {
  document.querySelector("title").innerText = "Shopee Việt Nam | Mua và Sắm";
  return (
    <section className="main">
      <Adver />
      <Sale />
      <Product />
    </section>
  );
};

export default Home;
