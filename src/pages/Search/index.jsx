import React from "react";
import ProductItem from "../../components/Home/ProductItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  productsSelector,
} from "../../store/reducers/productsSlice";
import Sidebar from "./Sidebar";
import Tools from "./Tools";
import Notfind from "../../components/Notfind";

const Search = ({ location }) => {
  //Redux
  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);
  //Get Product
  const product = products.map((item) => {
    return (
      <ProductItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.images[0]}
        size={["6", "4", "2-4"]}
      />
    );
  });
  //Get Products
  useEffect(() => {
    // get current url
    dispatch(filterProduct(location.search));
  }, [location]);
  return (
    <section className="main">
      <section className="search">
        <div className="grid wide">
          <div className="row">
            <Sidebar />
            <div className="col c-12 m-12 l-10">
              <div className="row">
                <Tools url={location.search} />
                {product.length === 0 ? <Notfind /> : product}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Search;
