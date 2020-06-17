import React from "react";

const ReviewItem = (props) => {
  const { handleRemoveProduct } = props;
  const { name, quantity, key, price } = props.product;
  const boxStyle = {
    borderBottom: "1px solid lightGray",
    marginBottom: "5px",
    paddingBottom: "5px",
    marginLeft: "5px",
  };
  return (
    <div style={boxStyle}>
      <h4 style={{ color: "blue" }}>{name}</h4>
      <p>Quantity:{quantity}</p>
      <p>
        <small>{price}</small>
      </p>

      <button className='addto-button' onClick={() => handleRemoveProduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
