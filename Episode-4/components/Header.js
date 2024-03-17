import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moon from "../images/moon.png";
import light from "../images/light.png";
import cereal from "../images/cereal.png";
import OfflineAlert from "./OfflineAlert";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [imgSrc, setImgSrc] = useState(moon);

  useEffect(() => handleToggle(), [imgSrc]);

  const handleToggle = () => {
    imgSrc === moon
      ? document
          .querySelectorAll("*")
          .forEach((e) => e.classList.remove("dark-mode"))
      : document
          .querySelectorAll("*")
          .forEach((e) => e.classList.add("dark-mode"));
  };

  return (
    <div className="header">
      <OfflineAlert />
      <div className="logo">
        <img className="logo-img" alt="logo image" src={cereal} />
      </div>

      <div className="nav">
        <ul className="list-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contactus">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <div className="mode-container">
              <img
                id="theme"
                src={imgSrc}
                alt="theme"
                onClick={() => {
                  imgSrc == moon ? setImgSrc(light) : setImgSrc(moon);
                  // return handleToggle();
                }}
              />
            </div>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
