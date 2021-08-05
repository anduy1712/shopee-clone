import React from "react";
import Column from "./Column";
import { FcInTransit } from "react-icons/fc";

const EmptyCart = () => {
  return (
    <Column c={12} m={12} l={12}>
      <div className="cart-empty">
        <FcInTransit className="cart-empty__icon" />
        <h3 className="cart-empty__txt">Giỏ Hàng Trống</h3>
      </div>
    </Column>
  );
};

export default EmptyCart;
