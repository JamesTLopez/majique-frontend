import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import FilterTab from "./components/FilterTab";
import { products } from "../../mock-data/data";
import "./Shop.scss";
import Context from "../../store/context/ProductContext";

const ProductListArea: React.FC = () => {
  let { product } = useContext(Context);
  let params = useParams();

  console.log(params);
  return (
    <div className="productList-container">
      <FilterTab section={params.id} />

      <div className="productList-wrapper">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1541495532687-d41ee8904943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1382&q=80"
            alt="Banner"
          />
        </div>
        <div className="products">
          {product.products.map((item: any) => {
            return (
              <ProductCard
                key={item.id}
                itemId={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListArea;
