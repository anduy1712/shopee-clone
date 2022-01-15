import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {
  getProduct,
  initialProductType,
  productsSelector
} from '../../store/reducers/productsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import { addCartApi } from '../../store/reducers/cartsSlice';
import Loading from '../../components/Loading';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useRef } from 'react';
import { Carousel } from 'react-carousel-minimal';
import { usersSelector } from '../../store/reducers/usersSlice';
import { FixMeLater } from '../../constant/other';
import { ProductInputModel } from '../../models/product/product.type';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const Detail = () => {
  //Get ID
  const { slug }: FixMeLater = useParams();
  //State
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);
  const [notify, setNotify] = useState(false);
  const inputElement = useRef(null);
  //Get Product
  const { product }: initialProductType = useSelector(productsSelector); //rerender
  const { users } = useSelector(usersSelector);
  document.querySelector<FixMeLater>('title').innerText =
    Object.keys(product).length > 0
      ? product.title
      : 'Shopee Việt Nam | Mua và Sắm';
  //Add Cart Item
  const addToCart = (obj: ProductInputModel) => {
    //CHECK USER
    if (users !== null) {
      if (amount > product.quantites!) {
        alert('So luong vuot qua muc cho phep');
        return;
      }
      if (notify) {
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
      const cartData = { ...obj, amount: Number(amount), userId: users._id };
      dispatch(addCartApi(cartData));
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
    }
  };
  //Change amount
  const ChangeAmount = (e: FixMeLater) => {
    const values = e.target.value;
    if (Number(values) < 0 || /^\d*\.?\d*$/.test(values) === false) return;
    if (Number(values) > product.quantites!) {
      setNotify(true);
      return;
    }
    if (Number(values) <= product.quantites!) {
      setNotify(false);
    }
    setAmount(values);
  };
  const increase = () => {
    if (amount >= product.quantites!) {
      setNotify(true);
      return;
    }
    const newAmount = amount + 1;
    setAmount(newAmount);
  };
  const decrease = () => {
    if (amount <= 1) return;
    if (amount <= product.quantites!) setNotify(false);
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
  const testt = product.images?.map((item) => {
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