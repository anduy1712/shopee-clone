import React from 'react';
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
