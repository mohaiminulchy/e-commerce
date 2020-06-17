import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  let { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <h1>Your Product Details</h1>
      <Product product={product} showAddToCart={false} />
    </div>
  );
};

export default ProductDetail;
