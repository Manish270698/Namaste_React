import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moon from "../images/moon.png";
import light from "../images/light.png";
import cereal from "../images/cereal.png";
import OfflineAlert from "./OfflineAlert";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [imgSrc, setImgSrc] = useState(moon);

  return (
    <div className={`${imgSrc == light ? "dark" : ""}`}>
      <div className="fixed top-0 z-10 flex w-full justify-between  border-b-[0.01rem] border-[#a8a9aa] font-medium text-[#334155] shadow-lg backdrop-blur-xl dark:border-[#303235] dark:text-[#e2e8f0]">
        <OfflineAlert />
        <div className="logo">
          <img className="m-3 h-16 w-16" alt="logo image" src={cereal} />
        </div>

        <div className="flex items-center justify-center">
          <ul className="mr-3 flex gap-5">
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
              <div className="h-6 w-6">
                <img
                  className="cursor-pointer"
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
    </div>
  );
};

export default Header;
