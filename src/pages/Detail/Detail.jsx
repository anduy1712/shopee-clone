import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getProduct,
  productsSelector
} from '../../store/reducers/productsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Thumbs } from 'swiper/core';
import { addCartApi } from '../../store/reducers/cartsSlice';
import Loading from '../../components/Loading';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useRef } from 'react';
import { Carousel } from 'react-carousel-minimal';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const Detail = () => {
  //Get ID
  const { slug } = useParams();
  //State
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [notify, setNotify] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const inputElement = useRef(null);
  //Get Product
  const { product } = useSelector(productsSelector); //rerender
  document.querySelector('title').innerText =
    Object.keys(product).length > 0
      ? product.title
      : 'Shopee Việt Nam | Mua và Sắm';
  //Add Cart Item
  const addToCart = (obj) => {
    const user = JSON.parse(localStorage.getItem('user'));
    //CHECK USER
    if (user !== null) {
      if (amount > product.quantites) {
        alert('So luong vuot qua muc cho phep');
        return;
      }
      if(notify) {
        alert('So luong vuot qua muc cho phep');
        return;
      }
      toast.success('Product added to cart', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      obj = { ...obj, amount: Number(amount), userId: user.id };
      dispatch(addCartApi(obj));
    } else {
      toast.error('Please login to buy', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      // history.push("/login");
    }
  };
  //Change amount
  const ChangeAmount = (e) => {
    const values = e.target.value;
    if (Number(values) < 0 || /^\d*\.?\d*$/.test(values) === false) return;
    if (Number(values) > product.quantites) {
      setNotify(true);
      return;
    }
    if (Number(values) <= product.quantites) {
      setNotify(false);
    }
    setAmount(values);
  };
  const increase = () => {
    if (amount >= product.quantites) {
      setNotify(true);
      return;
    }
    const newAmount = amount + 1;
    setAmount(newAmount);
  };
  const decrease = () => {
    if (amount <= 1) return;
    if (amount <= product.quantites) setNotify(false);
    const newAmount = amount - 1;
    setAmount(newAmount);
  };
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold'
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold'
  };

  const data = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg'
    },
    {
      image:
        'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg'
    },
    {
      image:
        'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg'
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg'
    },
    {
      image:
        'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg'
    },
    {
      image:
        'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg'
    },
    {
      image:
        'https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx'
    },
    {
      image:
        'https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg'
    },
    {
      image:
        'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg'
    }
  ];
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
  const testt = product.images.map((item) => {
    return { image: item };
  });
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
                    <Carousel
                      data={testt}
                      time={2000}
                      width="850px"
                      height="500px"
                      captionStyle={captionStyle}
                      radius="10px"
                      slideNumber={true}
                      slideNumberStyle={slideNumberStyle}
                      captionPosition="bottom"
                      automatic={true}
                      dots={true}
                      pauseIconColor="white"
                      pauseIconSize="40px"
                      slideBackgroundColor="darkgrey"
                      slideImageFit="cover"
                      thumbnails={true}
                      thumbnailWidth="100px"
                      style={{
                        textAlign: 'center',
                        maxWidth: '850px'
                        // maxHeight: '500px',
                        // margin: '40px auto'
                      }}
                    />
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
                      <div className="content__quantity">
                        <p className="content__quantity-txt">Số Lượng</p>
                        <div className="shopee-input">
                          <button
                            className="shopee-input__icon"
                            onClick={decrease}
                          >
                            <AiOutlineMinus />
                          </button>
                          <input
                            type="text"
                            value={amount}
                            onChange={(e) => ChangeAmount(e)}
                            ref={inputElement}
                          />
                          <button
                            className="shopee-input__icon"
                            onClick={increase}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                        <span>{product.quantites} sản phẩm có sẵn</span>
                      </div>
                      {notify && (
                        <div className="content__notify">
                          Đã đạt đến số lượng mua tối đa cho phép của sản phẩm
                          này
                        </div>
                      )}

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
