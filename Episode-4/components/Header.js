import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="logo-img" alt="logo image" src={LOGO} />
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
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
