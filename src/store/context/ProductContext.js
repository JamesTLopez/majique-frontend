import { createContext, useReducer } from "react";
import { ProductReducer } from "../reducer/ProductReducer";
import { products } from "../../mock-data/data";

const ProductContext = createContext();

const initProject = {
  display: false,
  products: products,
  filterOptions: {
    gender: "",
    category: "hats",
  },
};

export function ProductProvider({ children }) {
  const [product, dispatch] = useReducer(ProductReducer, initProject);

  return (
    <ProductContext.Provider value={{ product, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
