import { useNavigate } from "react-router-dom";
import "./styles/ProductCard.scss";
interface props {
  itemId: number;
  name: string;
  price: number;
  img: string;
}

const ProductCard: React.FC<props> = ({ itemId, name, price, img }) => {
  let navigate = useNavigate();
  const onClickRedirect = () => {
    navigate(`/shop/product-detail/${itemId}`);
  };

  return (
    <div className="product-card" onClick={onClickRedirect}>
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
