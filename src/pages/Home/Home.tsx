import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { CgArrowTopLeftR, CgSize } from "react-icons/cg";
import "./Home.scss";
import { Man } from "../../mock-data/image-list";
import Divider from "./components/Divider";

const Home: React.FC = () => {
  return (
    <div className="Home-wrapper">
      <header>
        <div className="container">
          <div id="nav_1">
            <div id="item">
              <Link to="/">HOME</Link>
            </div>
            <div id="item">
              <Link to="/shop">SHOP</Link>
            </div>
          </div>
          <div id="nav_2">
            <div id="logo">
              <h2>MAJIQUE</h2>
              <p>UNIQUE-FASHION-APPAREL</p>
            </div>
          </div>
          <div id="nav_3">
            <div id="item">
              {" "}
              <Link to="/account">ACCOUNT</Link>
            </div>
            <div id="item">
              {" "}
              <Link to="/account">
                <MdAccountCircle size={"27px"} />
              </Link>
            </div>
            <div id="cart">
              {" "}
              <Link to="/account">
                <div className="circle">0</div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="banner">
          <div className="banner-wrapper">
            <div className="left-banner">
              <div className="title-container">
                <h2>UNIQUE</h2>
                <h1>FASHION</h1>
                <h2>APPERAL</h2>
              </div>
              <div className="button-container">
                <Link to="/shop">
                  SHOP <CgArrowTopLeftR style={{ transform: "scaleX(-1)" }} />
                </Link>
              </div>
              <div className="bg">
                <div className="box-container">
                  <div id="box_1"></div>
                  <div id="box_2"></div>
                </div>
                <div className="circle-container">
                  <div id="circle_1" className="circle"></div>
                  <div id="circle_2" className="circle"></div>
                </div>
              </div>
            </div>
            <div className="right-banner">
              <div className="bg">
                <img src={Man} alt="man in suit" />
                <div className="box-container">
                  <div id="box_1"></div>
                  <div id="box_2"></div>
                </div>
                <div className="circle-container">
                  <div id="circle_1" className="circle"></div>
                  <div id="circle_2" className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collection">
          <div className="collection-wrapper">
            <div className="title-container">
              <h2>COLLECTION</h2>
            </div>
            <div className="text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada morbi tempus, habitant turpis at facilisis mi. Iaculis
                et praesent urna, semper orci condimentum. Aliquam facilisis
                nibh duis tellus gravida. Condimentum pulvinar tellus diam vitae
                nunc.
              </p>
            </div>
            <div className="button-container">
              <Link to="about">
                Learn More{" "}
                <CgArrowTopLeftR
                  size={"40px"}
                  style={{ transform: "scaleX(-1)" }}
                />
              </Link>
            </div>
          </div>
        </section>
        <Divider />
      </main>
    </div>
  );
};

export default Home;
