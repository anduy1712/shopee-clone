import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ img, title, price }) => {
  return (
    <Link to="#" className="col l-2 m-4 c-6">
      <div className="product">
        <div className="product__img" style={{ background: `url(${img})` }}>
          <span className="product__img-tag">Yêu Thích</span>
        </div>
        <div className="product__desc">
          <h3 className="product__desc-title">{title}</h3>
          <div className="product__box">
            <p className="product__box-price">${price}</p>
            <span className="product__box-sold">Đã bán 5k</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
