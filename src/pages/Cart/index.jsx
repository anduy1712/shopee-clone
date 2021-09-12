import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/reducers/cartsSlice';
import CartTable from './CartTable';

const Cart = () => {
  document.querySelector('title').innerText = 'Giỏ Hàng';

  return (
    <section className="main">
      <CartTable />
    </section>
  );
};

export default Cart;
