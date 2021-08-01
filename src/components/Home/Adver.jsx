import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Adver = () => {
  return (
    <section className="adver">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-8 l-8">
            <div className="adver__slider">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://cf.shopee.vn/file/156bafac960de967dc383f9817cffd4e_xhdpi"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cf.shopee.vn/file/bed9df9ce78a77380fc861ba73d5e910_xxhdpi"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cf.shopee.vn/file/db02884d41f634cc65c2e63c46ee3e84_xxhdpi"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cf.shopee.vn/file/bed9df9ce78a77380fc861ba73d5e910_xxhdpi"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col c-12 m-4 l-4">
            <div className="adver__banner">
              <div
                className="adver__banner-item"
                style={{
                  background:
                    "url(https://cf.shopee.vn/file/156bafac960de967dc383f9817cffd4e_xhdpi)",
                }}
              ></div>
              <div
                className="adver__banner-item"
                style={{
                  background:
                    "url(https://cf.shopee.vn/file/3f37d48fcb3537dea0e70eb1795f59a1_xhdpi)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adver;
