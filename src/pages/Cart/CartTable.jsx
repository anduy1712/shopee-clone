import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../components/EmptyCart';
import {
  cartsSelector,
  setTheme,
  total
} from '../../store/reducers/cartsSlice';
import CartItemTable from './CartItemTable';
import { usersSelector } from '../../store/reducers/usersSlice';

const CartTable = () => {
  const { users } = useSelector(usersSelector);
  const dispatch = useDispatch();
  const history = useHistory();
  if (!users) {
    alert('Vui lòng đăng nhập để mua hàng');
    history.push('/login');
  }
  const { cart, totalCart } = useSelector(cartsSelector);
  const handleSubmitCart = () => {
    history.push('/cart/checkout');
  };
  // useEffect(() => {
  //   if (user) {
  //     dispatch(getCartByUser(user.id));
  //   }
  // }, [dispatch, user]);
  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);
  useEffect(() => {
    dispatch(setTheme(true));
    return () => dispatch(setTheme(false));
  }, [dispatch]);
  const item = cart.map((item, index) => {
    return (
      <CartItemTable
        key={item.id}
        id={item.productId}
        index={index}
        name={item.title}
        amount={item.amount}
        img={item.images}
        price={item.price}
      />
    );
  });
  return (
    <section className="cart">
      <div className="grid wide">
        <div className="row">
          <div className="col c-12 m-12 l-12">
            <div className="cart__navbar">
              <div className="cart__navbar-item">
                <input type="checkbox" name="" id="" />
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
              <div className="cart__navbar-item">
                <p className="cart__navbar-heading">Thao Tác</p>
              </div>
            </div>
          </div>
          <div className="col c-12 m-12 l-12">
            <ul className="cartlist">
              {item.length === 0 ? <EmptyCart /> : item}
            </ul>
          </div>
          <div className="col c-12 m-12 l-12">
            {item.length === 0 ? (
              ''
            ) : (
              <div className="cartpay">
                <div className="cartpay__action">
                  <p className="cartpay__action-total">
                    Tổng thanh toán (0 Sản phẩm):{' '}
                    <span className="txt__primary">₫{totalCart}</span>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleSubmitCart}
                  >
                    Mua Hàng
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTable;
