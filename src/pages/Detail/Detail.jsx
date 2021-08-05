import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getProduct,
  productsSelector,
} from "../../store/reducers/productsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { addCart } from "../../store/reducers/cartsSlice";
import Loading from "../../components/Loading";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Detail = () => {
  //Get ID
  const { slug } = useParams();
  const dispatch = useDispatch();
  //Get Product
  const { product } = useSelector(productsSelector); //rerender
  //Add Cart Item
  const addToCart = (obj) => {
    const user = JSON.parse(localStorage.getItem("user"));
    //CHECK USER
    if (user !== null) {
      toast.success("Product added to cart", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addCart(obj));
    } else {
      toast.error("Please login to buy", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // history.push("/login");
    }
  };
  //Get Product When the fist load
  useEffect(() => {
    dispatch(getProduct(slug));
  }, [dispatch, slug]);
  if (Object.keys(product).length === 0) {
    return (
      <div className="grid wide">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  return (
    <section className="pagedetail">
      <div className="grid wide">
        <div className="row">
          <div className="col m-12 l-12">
            <div className="detail">
              <div className="row">
                <div className="col c-12 m-12 l-4">
                  <ToastContainer />
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
                          pagination={{
                            clickable: true,
                          }}
                          className="mySwiper"
                        >
                          {product.images.map((item, index) => {
                            if (index === 0) return "";
                            return (
                              <SwiperSlide>
                                <img src={item} alt="img_detail" />
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
                        <button
                          onClick={() => addToCart(product)}
                          className="btn btn-medium  btn-default"
                        >
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
