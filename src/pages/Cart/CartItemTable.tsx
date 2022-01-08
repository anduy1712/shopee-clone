import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  onChangeAmount,
  deleteItemCart,
  increaseCartApi,
  decreaseCartApi
} from '../../store/reducers/cartsSlice';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import _ from 'lodash';
import clsx from 'clsx';
import { FixMeLater } from '../../constant/other';

type CartItemProps = {
  index: number;
  id: number;
  name: string;
  img: string;
  price: number;
  amount: number;
};

const CartItemTable = ({
  index,
  id,
  name,
  img,
  price,
  amount
}: CartItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(amount);
  const [inputOpacity, setInputOpacity] = useState(false);

  //INCREASE CART
  const increaseCart = async (id: number) => {
    setInputOpacity(true);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    await dispatch(increaseCartApi(id));
    setInputOpacity(false);
  };
  //DECREASE CART
  const decreaseCart = async (id: number) => {
    setInputOpacity(true);
    await dispatch(decreaseCartApi(id));
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setInputOpacity(false);
  };
  //onChangeAmount CART
  const ChangeAmount = (e: FixMeLater, id: number) => {
    const obj = {
      value: Number(e.target.value),
      id
    };
    dispatch(onChangeAmount(obj));
  };
  //REMOVE ITEM CART
  const removeCart = (index: number) => {
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
        <div className={clsx({ 'shopee-input': true, opacity: inputOpacity })}>
          <button
            className="shopee-input__icon"
            onClick={_.debounce(() => decreaseCart(id), 300)}
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
            onClick={_.debounce(() => increaseCart(id), 300)}
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
