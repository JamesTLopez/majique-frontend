import react from "react";
import "./styles/ProductCard.scss";
interface props {
  name: string;
  price: number;
  img: string;
}

const ProductCard: React.FC<props> = ({ name, price, img }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="text-container">
        <p>
          <span>{name}</span>
        </p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
