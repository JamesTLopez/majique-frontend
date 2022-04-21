import React from "react";
import { Link } from "react-router-dom";
import "./FilterTab.scss";

function FilterTab() {
  return (
    <div className="filter-container">
      <div className="breadcrumbs">
        <h2>Men</h2>
      </div>
      <div className="Gender">
        <h3>Gender</h3>
        <ul>
          <li>
            <input type="checkbox" />
            Women
          </li>
          <li>
            <input type="checkbox" />
            Men
          </li>
        </ul>
      </div>
      <div className="Category">
        <h3>Category</h3>
        <ul>
          <li>
            <Link to="/shop/hat">Hats</Link>
          </li>
          <li>
            <Link to="/shop/hair-accessories">Hair Accessories</Link>{" "}
          </li>
          <li>
            <Link to="/shop/Perfume">Perfume</Link>
          </li>
          <li>
            <Link to="/shop/Bags">Bags</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterTab;
