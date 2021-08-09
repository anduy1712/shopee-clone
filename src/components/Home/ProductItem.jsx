import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Column from '../Column';
const ProductItem = ({ id, img, title, price, size }) => {
  const [c, m, l] = size;
  return (
    <Column c={c} m={m} l={l}>
      <Link to={'detail/' + id} className="product">
        <div className="product__img" style={{ background: `url(${img})` }}>
          <span className="product__img-tag">Yêu Thích</span>
        </div>
        <div className="product__desc">
          <h3 className="product__desc-title">
            {title || <Skeleton duration={2} />}
          </h3>
          <div className="product__box">
            <p className="product__box-price">${price}</p>
            <span className="product__box-sold">Đã bán 5k</span>
          </div>
        </div>
      </Link>
    </Column>
  );
};

export default ProductItem;
