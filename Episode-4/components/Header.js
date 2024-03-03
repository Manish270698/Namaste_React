import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/logo.png";
import moon from "../images/moon.png";
import light from "../images/light.png";
import cereal from "../images/cereal.png"

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [darkMode, setDarkMode] = useState(true);
  const [imgSrc, setImgSrc] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    setImgSrc(!imgSrc);
    document
      .querySelectorAll("*")
      .forEach((e) => e.classList.toggle("dark-mode"));
  };

  return (
    <div className="header">
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
                src={imgSrc ? moon : light}
                alt="theme"
                onClick={handleToggle}
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

// const modeSwitch = document.getElementById("modeSwitch");
// console.log("modeSwitch: ",modeSwitch);

// modeSwitch.addEventListener("change", function() {
//   document.body.classList.toggle("dark-mode", this.checked);
// });
export default Header;
