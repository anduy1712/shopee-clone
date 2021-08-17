import React from 'react';
import banner01 from '../../assets/images/adv_01.png';
import banner02 from '../../assets/images/adv_02.png';
import banner03 from '../../assets/images/adv_03.png';
import banner04 from '../../assets/images/adv_04.png';
import banner05 from '../../assets/images/adv_05.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
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
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                pagination={{
                  clickable: true
                }}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={banner01} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banner02} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={banner03} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col c-12 m-4 l-4">
            <div className="adver__banner">
              <div
                className="adver__banner-item"
                style={{
                  background: `url(${banner04})`
                }}
              ></div>
              <div
                className="adver__banner-item"
                style={{
                  background: `url(${banner05})`
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
