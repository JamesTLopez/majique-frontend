import React from "react";
import Header from "./components/Header";
import ProductListArea from "./ProductListArea";

const Shop: React.FC = () => {
  return (
    <div className="shop-wrapper">
      <Header />
      <div className="shop-container">
        <ProductListArea />
      </div>
    </div>
  );
};

export default Shop;
