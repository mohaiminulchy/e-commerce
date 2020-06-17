import React, { useState, useEffect } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

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

  //handle add function
  const handleAddProduct = (product) => {
    let count = 1;
    let newCart = [];
    const sameProduct = cart.find((pd) => pd.key === product.key);
    if (!sameProduct) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== product.key);
      newCart = [...others, product];
    }

    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        <ul>
          {products.map((pd) => (
            <Product
              key={pd.key}
              product={pd}
              handleAddProduct={handleAddProduct}
              showAddToCart={true}
            />
          ))}
        </ul>
      </div>

      <div className='card-container'>
        <Cart cart={cart}>
          <Link to='/review'>
            <button className='addto-button'>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
