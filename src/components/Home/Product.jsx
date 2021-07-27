import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  productsSelector,
} from "../../store/reducers/productsSlice";
import ProductItem from "./ProductItem";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  //Get Product
  const product = products.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.image}
      />
    );
  });
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section className="products">
      <div className="grid wide">
        <div className="row">{product}</div>
      </div>
    </section>
  );
};

export default Product;
