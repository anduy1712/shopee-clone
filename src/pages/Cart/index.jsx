import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../store/reducers/cartsSlice';
import CartTable from './CartTable';

const Cart = () => {
  // const { SearchTheme } = useSelector(cartsSelector);
  const dispatch = useDispatch();

  if (window.location === true) {
    dispatch(setTheme(false));
  }
  useEffect(() => {
    dispatch(setTheme(true));
  }, [dispatch]);
  return (
    <section className="main">
      <CartTable />
    </section>
  );
};

export default Cart;
