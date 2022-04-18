import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { CgArrowTopLeftR } from "react-icons/cg";
import { BsTwitter, BsFacebook, BsSnapchat } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

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
                nunc.Curabitur vitae pretium ex. Proin accumsan purus eu
                sagittis pretium. Nunc sagittis mi neque, sed rhoncus sapien
                rhoncus id. Praesent hendrerit nisi enim, sed pharetra tortor
                pretium vel.
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
        <section id="fits">
          <div className="fits-wrapper">
            <div className="title-container">
              <h2>FITS</h2>
            </div>
            <div className="image-container">
              <img
                id="model-1"
                src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="model-1"
              />
              <img
                id="model-2"
                src="https://images.unsplash.com/photo-1562121594-70a275d4b5e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="model-2"
              />
              <img
                id="model-3"
                src="https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                alt="model-3"
              />
              <img
                id="model-4"
                src="https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="model-4"
              />
            </div>
          </div>
        </section>
        <Divider />
        <section id="who-are-we">
          <div className="who-wrapper">
            <div className="title-container">
              <h2>WHO ARE WE?</h2>
              <h3>Our Story</h3>
            </div>
            <div className="description-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus sollicitudin donec fringilla nunc vel. Pharetra est
                enim amet venenatis, sapien mauris at. Sem sed vestibulum, donec
                tortor ullamcorper cursus. A est morbi scelerisque at. Odio
                molestie senectus leo morbi dictum. Ultricies vitae, consectetur
                leo pharetra accumsan.
              </p>
            </div>
            <div className="logo-container">
              <h3>MAJIQUE</h3>
              <p>
                <span>UNIQUE - FASHION - APPAREL</span>
              </p>
            </div>
          </div>
        </section>
        <Divider />
        <section id="social-media">
          <div className="social-wrapper">
            <div className="title-container">
              <h2>FIND US AT</h2>
              <h3>@Majique</h3>
            </div>
            <div className="icon-container">
              <BsTwitter size={"50px"} />
              <AiFillInstagram size={"50px"} />
              <BsFacebook size={"40px"} />
              <BsSnapchat size={"40px"} />
            </div>
            <div className="bg">
              <div className="sqr-container">
                <div id="sqr-1"></div>
                <div id="sqr-2"></div>
              </div>
            </div>
          </div>
        </section>
        <Divider />
      </main>
      <footer>
        <div className="footer-container">
          <div className="logo">
            <div id="logo">
              <h2>MAJIQUE</h2>
              <p>UNIQUE-FASHION-APPAREL</p>
            </div>
          </div>
          <div className="links">
            <div className="top-panel">
              <ul>
                <li>
                  <Link to=""> Shop</Link>
                </li>
                <li>
                  <Link to=""> About</Link>
                </li>
                <li>
                  <Link to=""> Terms and Conditions</Link>
                </li>
                <li>
                  <Link to=""> Account</Link>
                </li>
                <li>
                  <Link to=""> Careers</Link>
                </li>
                <li>
                  <Link to=""> Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="bottom-panel"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
