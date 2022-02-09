import React from "react";
import { FixMeLater } from "../../constant/other";
import Adver from "./Adver";
import Product from "./Product";
import Sale from "./Sale";

const Home = () => {
  document.querySelector<FixMeLater>("title").innerText = "Shopee Việt Nam | Mua và Sắm";
  return (
    <section className="main">
      <Adver />
      <Sale />
      <Product />
    </section>
  );
};

export default Home;
