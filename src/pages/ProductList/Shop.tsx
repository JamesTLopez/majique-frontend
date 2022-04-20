import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import FilterTab from "./components/FilterTab";
import Header from "./components/Header";
import ProductListArea from "./ProductListArea";

const Shop: React.FC = () => {
  return (
    <div className="shop-wrapper">
      <Header />
      <div className="shop-container">
        <Routes>
          <Route path=":id" element={<ProductListArea />} />
        </Routes>
      </div>
    </div>
  );
};

export default Shop;
