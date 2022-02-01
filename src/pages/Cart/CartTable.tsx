import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../components/EmptyCart';
import {
  cartsSelector,
  getCartByUser,
  setTheme
} from '../../store/reducers/cartsSlice';
import CartItemTable from './CartItemTable';
import {
  initialStateUser,
  usersSelector
} from '../../store/reducers/usersSlice';
import { FixMeLater } from '../../constant/other';

const CartTable = () => {
  const { users }: initialStateUser = useSelector(usersSelector);
  const { cart, quantity, totalCart } = useSelector(cartsSelector);
  const dispatch: any = useDispatch();
  const history = useHistory();
  //Check user isn't login
  if (!users) {
    alert('Vui lòng đăng nhập để mua hàng');
    history.push('/login');
  }
  //Push to check out page
  const handleSubmitCart = () => {
    history.push('/cart/checkout');
  };
  useEffect(() => {
    dispatch(getCartByUser(users._id));
  }, [users]);
  //use themeplate when use cart page
  useEffect(() => {
    dispatch(setTheme(true));
    return () => dispatch(setTheme(false));
  }, [dispatch]);
  const item = cart?.map((item: FixMeLater, index: number) => {
    return (
      <CartItemTable
        key={item._id}
        id={item._id}
        index={index}
        name={item.title}
        quantites={item.quantites}
        amount={item.quantity}
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
            <ul className="cartlist">{item ? item : <EmptyCart />}</ul>
          </div>
          <div className="col c-12 m-12 l-12">
            {!item ? (
              ''
            ) : (
              <div className="cartpay">
                <div className="cartpay__action">
                  <p className="cartpay__action-total">
                    {`Tổng thanh toán (${quantity} Sản phẩm): `}
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
