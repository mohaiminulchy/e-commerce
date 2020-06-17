import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { img, name, seller, price, stock, key } = props.product;
  const { handleAddProduct, showAddToCart } = props;
  return (
    <div className='product'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-details'>
        <h5 style={{ color: "blue" }}>
          <Link to={"/product/" + key}>{name}</Link>
        </h5>
        <h6>By {seller}</h6>
        <h5>Price : ${price}</h5>
        <p>Only {stock} left in the stock</p>
        {showAddToCart === true ? (
          <button
            className='addto-button'
            onClick={() => handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Product;
