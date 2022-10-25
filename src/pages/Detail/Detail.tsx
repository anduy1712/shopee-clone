import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Carousel } from 'react-carousel-minimal';
import { ToastContainer, toast } from 'react-toastify';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';
import {
  getProduct,
  initialProductType,
  productsSelector
} from 'src/store/reducers/productsSlice';
import 'react-toastify/dist/ReactToastify.css';
import {  postCartApi } from 'src/store/reducers/cartsSlice';
import Loading from 'src/components/Loading';
import {
  initialStateUser,
  usersSelector
} from 'src/store/reducers/usersSlice';
import { FixMeLater } from 'src/constant/other';
import {
  ProductOutputModel
} from 'src/models/product/product.type';
import InputCustom from 'src/components/InputCustom';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const Detail = () => {
  //Get ID
  const { slug }: FixMeLater = useParams();
  //State
  const dispatch = useDispatch();
  const [amount, setAmount] = useState<number>(1);
  const [notify, setNotify] = useState(false);
  //Get Product
  const { product }: initialProductType = useSelector(productsSelector); //rerender
  const { users }: initialStateUser = useSelector(usersSelector);
  document.querySelector<FixMeLater>('title').innerText =
    Object.keys(product).length > 0
      ? product.title
      : 'Shopee Việt Nam | Mua và Sắm';
  //Add Cart Item
  const addToCart = (obj: ProductOutputModel) => {
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
      const cartData = {
        userId: users._id,
        products: [{ productId: obj._id, quantity: Number(amount) }]
      };
      console.log(cartData);
      dispatch(postCartApi(cartData));
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
  const ChangeAmount = (values: number) => {
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
                      time={3000}
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
                        <InputCustom
                          onDecrease={decrease}
                          onIncrease={increase}
                          onChange={ChangeAmount}
                          value={amount}
                          timeDelayClick={0}
                        />
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
                          onClick={() =>
                            addToCart(product as ProductOutputModel)
                          }
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
