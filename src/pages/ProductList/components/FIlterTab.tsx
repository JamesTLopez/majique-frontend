import React from "react";
import { Link } from "react-router-dom";
import "./styles/FilterTab.scss";

interface props {
  section?: string;
}

const FilterTab: React.FC<props> = ({ section }) => {
  return (
    <div className="filter-container">
      <div className="breadcrumbs">
        <h2>{section}</h2>
      </div>
      <div className="Category">
        <h3>Category</h3>
        <ul>
          <li>
            <Link to="/shop/products/hat">Hats</Link>
          </li>
          <li>
            <Link to="/shop/products/hair-accessories">Hair Accessories</Link>{" "}
          </li>
          <li>
            <Link to="/shop/products/perfume">Perfume</Link>
          </li>
          <li>
            <Link to="/shop/products/bags">Bags</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterTab;
