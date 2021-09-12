import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  onChangeAmount,
  deleteItemCart,
  increaseCartApi,
  decreaseCartApi
} from '../../store/reducers/cartsSlice';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartItemTable = ({ index, id, name, img, price, amount }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(amount);
  //INCREASE CART
  const increaseCart = async (id) => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await dispatch(increaseCartApi(id));
  };
  //DECREASE CART
  const decreaseCart = (id) => {
    dispatch(decreaseCartApi(id));
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };
  //onChangeAmount CART
  const ChangeAmount = (e, id) => {
    const obj = {
      value: Number(e.target.value),
      id
    };
    dispatch(onChangeAmount(obj));
  };
  //REMOVE ITEM CART
  const removeCart = (index) => {
    // console.log(index);
    dispatch(deleteItemCart(index));
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
          <input
            type="text"
            value={quantity}
            onChange={(e) => ChangeAmount(e, id)}
            // onBlur={test}
          />
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
          onClick={() => removeCart(index)}
          className="btn btn-small btn-primary"
        >
          Xoá
        </button>
      </div>
    </li>
  );
};

export default CartItemTable;
