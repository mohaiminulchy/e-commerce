import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import happyImg from "../../images/giphy.gif";

const Review = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder(cart);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  const thankYou = <img src={happyImg} alt='' />;
  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            product={pd}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
        {orderPlaced === true ? thankYou : null}
      </div>
      <div className='shop-container'>
        <Cart cart={cart}>
          <button className='addto-button' onClick={handlePlaceOrder}>
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
