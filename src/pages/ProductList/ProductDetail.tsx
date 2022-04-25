import { Item } from "framer-motion/types/components/Reorder/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../mock-data/data";
function ProductDetail() {
  let [product, setProduct] = useState<any>({
    id: "1",
    name: "",
    price: 0,
    shipping: 0,
    subTitle: "",
    description: "",
    img: "",
  });
  let params = useParams();

  useEffect(() => {
    let prod = products.find((item: any) => item.id == params.id);
    if (prod) {
      setProduct(prod);
    } else {
      console.log("404");
    }
    console.log(prod);
  }, []);

  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <div className="product-section">
          <div className="img-container">
            <img src={product.img} />
          </div>
          <div className="info-container">
            <div className="product-title">
              <h1>{product.name}</h1>
              <h3>${product.price}</h3>
              <div className="shipping-field">
                <h4>${product.shipping}</h4>
                <h5>in shipping + handling</h5>
              </div>
            </div>
            <div className="product-description">
              <h4>{product.subTitle}</h4>
              <p>{product.description}</p>
            </div>
            <div className="button-container">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
