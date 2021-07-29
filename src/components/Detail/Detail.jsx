import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getProduct,
  productSelector,
} from "../../store/reducers/productsSlice";
const Detail = () => {
  //Get Id
  const { slug } = useParams();
  const dispatch = useDispatch();
  //Get Product
  const product = useSelector(productSelector);

  useEffect(() => {
    dispatch(getProduct(slug));
  }, []);
  return (
    <section className="pagedetail">
      <div className="grid wide">
        <div className="row">
          <div className="col m-12 l-12">
            <div className="detail">
              <div className="row">
                <div className="col c-12 m-12 l-4">
                  <div className="detail__left">
                    <div className="images">
                      <img src={product.image} alt="img_detail" />
                    </div>
                  </div>
                </div>
                <div className="col c-12 m-12 l-8">
                  <div className="detail__right">
                    <div className="content">
                      <div className="content__title">
                        <span className="content__title-hashtag">
                          Yêu thích
                        </span>
                        <h2 className="content__title-txt">{product.title}</h2>
                      </div>
                      <div className="content__options"></div>
                      <p className="content__price">${product.price}</p>
                      <div className="content__desc">{product.description}</div>
                      <div className="content__button">
                        <button className="btn btn-medium  btn-default">
                          Thêm vào giỏ hàng
                        </button>
                        <button className="btn btn-medium  btn-primary">
                          Mua Ngay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
