import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';
import { updateQuantityCartApi } from '../../store/reducers/cartsSlice';
import _ from 'lodash';
import { FixMeLater } from '../../constant/other';
import {
  initialStateUser,
  usersSelector
} from '../../store/reducers/usersSlice';
import InputCustom from '../../components/InputCustom';

type CartItemProps = {
  index: number;
  _id: number;
  name: string;
  img: string;
  price: number;
  amount: number;
  quantites: number;
};

const CartItemTable = ({
  index,
  _id,
  name,
  img,
  price,
  amount,
  quantites
}: CartItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(amount);
  const { users }: initialStateUser = useSelector(usersSelector);
  const updateQuantityCart = async (id: number, newQuantity: number) => {
    if (newQuantity > quantites)
      return alert('Số lượng sản phẩm vượt quá mức cho phép');
    const object = {
      userId: users._id,
      productId: id,
      quantity: newQuantity
    };
    await dispatch(updateQuantityCartApi(object));
    setQuantity(newQuantity);
  };
  //onChangeAmount CART
  const ChangeAmount = async (value: number) => {
    if (value > quantites)
      return alert('Số lượng sản phẩm vượt quá mức cho phép');
    setQuantity(value);
    const object = {
      userId: users._id,
      productId: _id,
      quantity: +value
    };
    await dispatch(updateQuantityCartApi(object));
  };
  //REMOVE ITEM CART
  const removeCart = async () => {
    // console.log(index);
    const object = {
      userId: users._id,
      productId: _id,
      quantity: 0
    };
    await dispatch(updateQuantityCartApi(object));
  };
  const totalItem = price * amount;

  function onChange(e: any) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <li className="cartlist__item">
      <div className="cartlist__item-box">
        <Checkbox onChange={onChange} value={_id}></Checkbox>
      </div>
      <div className="cartlist__item-box">
        <img src={img?.[0]} alt="img_cart" />
        <h3 className="cartlist__item-title">{name}</h3>
      </div>
      <div className="cartlist__item-box">
        <p className="cartlist__item-price">${price}</p>
      </div>
      <div className="cartlist__item-box">
        <InputCustom
          onDecrease={() => updateQuantityCart(_id, quantity - 1)}
          onIncrease={() => updateQuantityCart(_id, quantity + 1)}
          onChange={(e: any) => ChangeAmount(e)}
          value={quantity}
        />
      </div>
      <div className="cartlist__item-box">
        <p className="cartlist__item-totalitem">${totalItem}</p>
      </div>
      <div className="cartlist__item-box">
        <button onClick={removeCart} className="btn btn-small btn-primary">
          Xoá
        </button>
      </div>
    </li>
  );
};

export default CartItemTable;
