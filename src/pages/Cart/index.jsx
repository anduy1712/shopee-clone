import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartsSelector, getCart } from "../../store/reducers/cartsSlice";
import { getProduct } from "../../store/reducers/productsSlice";

const Cart = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const carts = useSelector(cartsSelector);
  //GET ID PRODUCT
  const { products } = carts;
  products.forEach(item => {
    
    
  })
 
  useEffect(() => {
    dispatch(getCart(user.id));
  }, []);
  return (
    <section className="main">
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
                <li className="cartlist__item">
                  <div className="cartlist__item-box">
                    <img
                      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                      alt="img_cart"
                    />
                    <h3 className="cartlist__item-title">
                      [Siêu HOT] Hộp Đựng Túi Ni Lông Dán Tường Tiện Lợi - Mẫu 2
                    </h3>
                  </div>
                  <div className="cartlist__item-box">
                    <p className="cartlist__item-price">$57.5</p>
                  </div>
                  <div className="cartlist__item-box">
                    <span>2</span>
                  </div>
                  <div className="cartlist__item-box">
                    <p className="cartlist__item-totalitem">$57.5</p>
                  </div>
                  <div className="cartlist__item-box">
                    <button className="btn btn-small btn-primary">Xoá</button>
                  </div>
                </li>
                <li className="cartlist__item">
                  <div className="cartlist__item-box">
                    <img
                      src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                      alt="img_cart"
                    />
                    <h3 className="cartlist__item-title">
                      [Siêu HOT] Hộp Đựng Túi Ni Lông Dán Tường Tiện Lợi - Mẫu 2
                    </h3>
                  </div>
                  <div className="cartlist__item-box">
                    <p className="cartlist__item-price">$57.5</p>
                  </div>
                  <div className="cartlist__item-box">
                    <span>2</span>
                  </div>
                  <div className="cartlist__item-box">
                    <p className="cartlist__item-totalitem">$57.5</p>
                  </div>
                  <div className="cartlist__item-box">
                    <button className="btn btn-small btn-primary">Xoá</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
