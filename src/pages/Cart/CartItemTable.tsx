import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantityCartApi } from '../../store/reducers/cartsSlice';
import {
  initialStateUser,
  usersSelector
} from '../../store/reducers/usersSlice';
import InputCustom from '../../components/InputCustom';

type CartItemProps = {
  index: number;
  id: number;
  name: string | null;
  img: string[];
  price: number | null;
  amount: number;
  quantites: number;
};

const CartItemTable = ({
  id,
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
      productId: id,
      quantity: +value
    };
    await dispatch(updateQuantityCartApi(object));
  };

  //REMOVE ITEM CART
  const removeCart = async () => {
    // console.log(index);
    const object = {
      userId: users._id,
      productId: id,
      quantity: 0
    };
    await dispatch(updateQuantityCartApi(object));
  };
  
  const totalItem = price ? price * amount : 0;
  return (
    <li className="cartlist__item">
      <div className="cartlist__item-box">
        <img src={img?.[0]} alt="img_cart" />
        <h3 className="cartlist__item-title">{name}</h3>
      </div>
      <div className="cartlist__item-box">
        <p className="cartlist__item-price">${price}</p>
      </div>
      <div className="cartlist__item-box">
        <InputCustom
          onDecrease={() => updateQuantityCart(id, quantity - 1)}
          onIncrease={() => updateQuantityCart(id, quantity + 1)}
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
