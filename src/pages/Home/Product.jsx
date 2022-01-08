import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  productsSelector
} from '../../store/reducers/productsSlice';
import ProductItem from '../../components/Home/ProductItem';
import SkeletonCard from '../../components/SkeletonCard';

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(productsSelector);
  //Get Product
  const product = products.map((item) => {
    console.log(item);
    return (
      <ProductItem
        key={item._id}
        id={item._id}
        title={item.title}
        price={item.price}
        img={item.images[0]}
        size={['6', '4', '2']}
      />
    );
  });
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="products">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <div className="navbar">
              <h2 className="navbar-title">Gợi ý hôm nay</h2>
              <img
                className="navbar-img"
                src="https://cf.shopee.vn/file/cb7702bebc3ee2e6c8f3ce66d1d1864a"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row row-cus">
          {product.length === 0
            ? Array(12)
                .fill()
                .map((item, index) => (
                  <SkeletonCard key={index} size={['6', '4', '2']} />
                ))
            : product}
        </div>
      </div>
    </section>
  );
};

export default Product;
