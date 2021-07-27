import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Home/Product";
const Home = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <Product />
      </section>
    </div>
  );
};

export default Home;
