import React from "react";
import "../Cart/Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let price = 0;
  cart.map((prod) => (price = price + prod.quantity * prod.price));

  let shipping = 12.99;
  if (price > 80) {
    shipping = 0;
  } else if (price > 40) {
    shipping = 6.99;
  } else if (price === 0) {
    shipping = 0;
  }
  let total = price + shipping;
  return (
    <div className='cart'>
      <h4>Order Summary</h4>
      <p>Items Ordered: {cart.length}</p>
      <p>Product Price:{price}</p>
      <p>
        <small>Shipping Charge:{shipping}</small>
      </p>
      <p>
        <small>Total Bill: {total}</small>
      </p>
      {props.children}
    </div>
  );
};

export default Cart;
