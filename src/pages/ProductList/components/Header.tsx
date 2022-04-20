import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./Header.scss";

function Header() {
  return (
    <header>
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
              <Link to="men">Men</Link>
            </li>
            <li>
              <Link to="Women">Women</Link>
            </li>
            <li>
              <Link to="Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="Bags">Bag</Link>
            </li>
            <li>
              <Link to="Accessories">Accessories</Link>
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
    </header>
  );
}

export default Header;
