import React from "react";
import { Routes, useParams } from "react-router-dom";
import FilterTab from "./components/FilterTab";
import "./Shop.scss";

const ProductListArea: React.FC = () => {
  let params = useParams();

  return (
    <div className="productList-container">
      <FilterTab />

      <div className="productList-wrapper"></div>
    </div>
  );
};

export default ProductListArea;
