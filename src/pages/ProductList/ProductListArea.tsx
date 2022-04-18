import React from "react";
import { useParams } from "react-router-dom";

const ProductListArea: React.FC = () => {
  let params = useParams();

  return <div>ProductListArea {params.id}</div>;
};

export default ProductListArea;
