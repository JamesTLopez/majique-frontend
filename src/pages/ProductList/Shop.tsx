import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductListArea from "./ProductListArea";

const Shop: React.FC = () => {
  return (
    <div className="shop-wrapper">
      <Header />
      <Link to="test">Link</Link>
      <Routes>
        <Route path=":id" element={<ProductListArea />} />
      </Routes>
    </div>
  );
};

export default Shop;
