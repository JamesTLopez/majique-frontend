import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./ProductDetail";
import ProductListArea from "./ProductListArea";

const Shop: React.FC = () => {
  return (
    <div className="shop-wrapper">
      <Header />
      <div className="shop-container">
        <Routes>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/products/:id" element={<ProductListArea />} />
        </Routes>
      </div>
    </div>
  );
};

export default Shop;
