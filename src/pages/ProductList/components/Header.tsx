import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="logo-container">
          <div id="logo">
            <h2>MAJIQUE</h2>
            <p>UNIQUE-FASHION-APPAREL</p>
          </div>
        </div>
        <div className="links-container">
          <ul>
            <li>
              <Link to="products/men">Men</Link>
            </li>
            <li>
              <Link to="products/Women">Women</Link>
            </li>
            <li>
              <Link to="products/Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="products/Bags">Bag</Link>
            </li>
            <li>
              <Link to="products/Accessories">Accessories</Link>
            </li>
            <li>
              <Link to="Accessories">
                <span>SALES OF THE WEEK</span>
              </Link>
            </li>
          </ul>
          <div className="icons-container">
            <BsCart size="36px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
