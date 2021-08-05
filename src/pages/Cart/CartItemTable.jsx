import React from "react";
import { useDispatch } from "react-redux";
import { remove, increase, decrease } from "../../store/reducers/cartsSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItemTable = ({ id, name, img, price, amount }) => {
  const dispatch = useDispatch();
  //INCREASE CART
  const increaseCart = (id) => {
    dispatch(increase(id));
  };
  //DECREASE CART
  const decreaseCart = (id) => {
    dispatch(decrease(id));
  };
  //REMOVE ITEM CART
  const removeCart = (id) => {
    dispatch(remove(id));
  };
  const totalItem = price * amount;
  return (
    <li className="cartlist__item">
      <div className="cartlist__item-box">
        <img src={img[0]} alt="img_cart" />
        <h3 className="cartlist__item-title">{name}</h3>
      </div>
      <div className="cartlist__item-box">
        <p className="cartlist__item-price">${price}</p>
      </div>
      <div className="cartlist__item-box">
        <div className="shopee-input">
          <button
            className="shopee-input__icon"
            onClick={() => decreaseCart(id)}
          >
            <AiOutlineMinus />
          </button>
          <input type="text" defaultValue={amount} value={amount} />
          <button
            className="shopee-input__icon"
            onClick={() => increaseCart(id)}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className="cartlist__item-box">
        <p className="cartlist__item-totalitem">${totalItem}</p>
      </div>
      <div className="cartlist__item-box">
        <button
          onClick={() => removeCart(id)}
          className="btn btn-small btn-primary"
        >
          Xoá
        </button>
      </div>
    </li>
  );
};

export default CartItemTable;
