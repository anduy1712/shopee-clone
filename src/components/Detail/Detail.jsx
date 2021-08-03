import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getProduct,
  productSelector,
} from "../../store/reducers/productsSlice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Detail = () => {
  //Get Id
  const { slug } = useParams();
  const dispatch = useDispatch();
  //Get Product
  const product = useSelector(productSelector); //rerender
  const check = Object.keys(product).length === 0 ? false : true;
  const [MainImg, setMainImg] = useState(check ? product.images[0] : "duy an");

  const handleImage = (url) => {
    console.log("current image ", url);
    setMainImg(url);
  };

  useEffect(() => {
    dispatch(getProduct(slug));
  }, []);
  if (Object.keys(product).length === 0) {
    return <div>loading</div>;
  }

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
                      <img src={product.images[0]} alt="img_detail" />
                      <div className="images__box">
                        <Swiper
                          slidesPerView={3}
                          spaceBetween={10}
                          slidesPerGroup={3}
                          loop={true}
                          loopFillGroupWithBlank={true}
                          navigation={true}
                          className="mySwiper"
                        >
                          {product.images.map((item, index) => {
                            if (index === 0) return "";
                            return (
                              <SwiperSlide>
                                {console.log(index)}
                                <img
                                  src={item}
                                  alt="img_detail"
                                  onClick={() => handleImage(item)}
                                />
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>
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
