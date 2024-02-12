// import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";
import LOGO from "../images/logo.png"


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  
  return (
    <div className="header">
        <div className="logo">
          <img className="logo-img" alt="logo image" src={LOGO} />
        </div>
        <div className="nav">
          <ul className="list-items">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
            <button className="login"
            onClick={()=>{
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
      </div>
    </div>
  );
};

export default Header;
