import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartsSelector, total } from "../../store/reducers/cartsSlice";
import CartItemTable from "./CartItemTable";
const CartTable = () => {
  const dispatch = useDispatch();
  const { cart, totalCart } = useSelector(cartsSelector);
  const item = cart.map((item) => {
    return (
      <CartItemTable
        key={item.id}
        id={item.id}
        name={item.title}
        amount={item.amount}
        img={item.images}
        price={item.price}
      />
    );
  });
  useEffect(() => {
    dispatch(total());
  }, [cart, dispatch]);
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
            <ul className="cartlist">{item}</ul>
          </div>
          <div className="col c-12 m-12 l-12">
            <div className="cartpay">
              <div className="cartpay__action">
                <p className="cartpay__action-total">
                  Tổng thanh toán (0 Sản phẩm):{" "}
                  <span className="txt__primary">₫{totalCart}</span>
                </p>
                <button className="btn btn-primary">Mua Hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTable;
