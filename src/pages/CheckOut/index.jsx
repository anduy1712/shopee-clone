import React from 'react';
import Column from '../../components/Column';
import { IoLocationSharp } from 'react-icons/io5';
import { Link, useHistory } from 'react-router-dom';
import { FcShipped } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/reducers/usersSlice';
import {
  cartsSelector,
  removeCartApi,
  total
} from '../../store/reducers/cartsSlice';
import { useEffect } from 'react';
import { addCustomerApi } from '../../store/reducers/customersSlice';
import { useState } from 'react';

const CheckOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { users } = useSelector(usersSelector);
  const { cart, totalCart } = useSelector(cartsSelector);
  const [success, setSuccess] = useState(false);
  const createCustomer = () => {
    const cus = {
      userId: users.id,
      products: cart,
      totalPrice: totalCart,
      status: 'delivery'
    };
    dispatch(addCustomerApi(cus));
    setSuccess(true);
    dispatch(removeCartApi());
  };
  const itemCart = cart.map((item) => {
    return (
      <ul className="cartlist">
        <li className="cartlist__item">
          <div className="cartlist__item-box">
            <img src={item.images[0]} alt="img_cart" />
            <h3 className="cartlist__item-title">{item.title}</h3>
          </div>
          <div className="cartlist__item-box">
            <p className="cartlist__item-price">{item.price}</p>
          </div>
          <div className="cartlist__item-box">
            <p className="cartlist__item-price">{item.amount}</p>
          </div>
          <div className="cartlist__item-box">
            <p className="cartlist__item-totalitem">
              {item.price * item.amount}
            </p>
          </div>
        </li>
      </ul>
    );
  });
  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);
  useEffect(() => {
    return () => setSuccess(false);
  }, []);
  return (
    <section className="main">
      <section className="page-checkout">
        {success && (
          <section className="success">
            <div className="grid wide">
              <div className="row">
                <Column c={12} m={12} l={12}>
                  <div className="success-order">
                    <FcShipped className="success-order-icon" />
                    <h2>Cảm ơn bạn, đơn hàng của bạn đã được đặt thành công</h2>
                    <button
                      className="btn btn-primary"
                      onClick={() => history.push('/')}
                    >
                      Quay về trang chủ
                    </button>
                  </div>
                </Column>
              </div>
            </div>
          </section>
        )}
        {!success && (
          <section className="address">
            <div className="grid wide">
              <div className="row">
                <Column c={12} m={12} l={12}>
                  <div className="address-edit">
                    <h3 className="address-edit__title">
                      <IoLocationSharp className="icon" />
                      Địa chỉ nhận hàng
                    </h3>
                    <div className="address-edit__content">
                      <p>
                        {users.name.firstname} {users.name.lastname} (+84){' '}
                        {users.phone}
                      </p>
                      <span>{users.address}</span>
                      <Link to="/">thay đổi</Link>
                    </div>
                  </div>
                </Column>
              </div>
            </div>
          </section>
        )}
        {!success && (
          <section className="cart">
            <div className="grid wide">
              <div className="row">
                <div className="col c-12 m-12 l-12">
                  <div className="cart__navbar">
                    <div className="cart__navbar-item">
                      <p className="cart__navbar-heading">Sản Phẩm</p>
                    </div>
                    <div className="cart__navbar-item">
                      <p className="cart__navbar-heading">Đơn Giá</p>
                    </div>
                    <div className="cart__navbar-item">
                      <p className="cart__navbar-heading">Số Lượng</p>
                    </div>
                    <div className="cart__navbar-item">
                      <p className="cart__navbar-heading">Số Tiền</p>
                    </div>
                  </div>
                </div>
                <div className="col c-12 m-12 l-12">{itemCart}</div>
                <div className="col c-12 m-12 l-12">
                  <div className="cartpay">
                    <div className="cartpay__action">
                      <p className="cartpay__action-total">Tổng tiền hàng:</p>
                      <span className="txt__grey">
                        {Math.floor(totalCart)}₫
                      </span>
                    </div>
                    <div className="cartpay__action">
                      <p className="cartpay__action-total">Phí vận chuyển:</p>
                      <span className="txt__grey">15.000₫</span>
                    </div>
                    <div className="cartpay__action">
                      <p className="cartpay__action-total">Tổng thanh toán:</p>
                      <span className="txt__primary">
                        {Math.floor(totalCart + 15000)}₫
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col c-12 m-12 l-12">
                  <div className="cartpay">
                    <div className="cartpay__action">
                      <button
                        onClick={createCustomer}
                        className="btn  btn-primary"
                      >
                        Đặt Hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </section>
    </section>
  );
};

export default CheckOut;
