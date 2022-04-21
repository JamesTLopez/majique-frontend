import React from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import FilterTab from "./components/FilterTab";
import Header from "./components/Header";
import ProductListArea from "./ProductListArea";

const Shop: React.FC = () => {
  const ok = useParams();

  console.log(ok);
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
