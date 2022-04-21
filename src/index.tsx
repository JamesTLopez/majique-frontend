import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Home from "./pages/Home/Home";
import Shop from "./pages/ProductList/Shop";
import { ProductProvider } from "./store/context/ProductContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route path=":id" element={<Shop />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>
);
