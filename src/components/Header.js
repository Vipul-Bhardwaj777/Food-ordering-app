import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [Profile, setProfile] = useState("Login");
  return (
    <nav className="nav-bar flex justify-between h-20 items-center shadow-lg sticky top-0 z-10 bg-white text-mainText-color">
      <div className="nav-left h-20 flex items-center">
        <Link to="/">
          <img className="nav-img w-20 ml-4" src={LOGO} />
        </Link>
        <p className="text-[14px] ml-10 font-bold">
          Palampur, Himachal Pradesh
        </p>
      </div>
      <div className="nav-right">
        <ul className="nav-list flex text-[16px] gap-[60px] px-8">
          <li>
            <Link
              className="nav-link items-center gap-3 text-[16px] flex bg-white cursor-pointer w-[77px] text-mainText-color"
              to="/help"
            >
              <i className="fa-solid fa-comment"></i>
              Help
            </Link>
          </li>
          <li>
            <Link
              className="nav-link items-center gap-3 text-[16px] flex bg-white cursor-pointer w-[77px] text-mainText-color"
              to="/offers"
            >
              <i className="fa-solid fa-gift"></i>
              Offers
            </Link>
          </li>
          <li>
            <Link
              className="nav-link items-center gap-3 text-[16px] flex bg-white cursor-pointer w-[77px] text-mainText-color"
              onClick={() =>
                Profile === "Login" ? setProfile("Vipul") : setProfile("Login")
              }
            >
              <i className="fa-solid fa-user"></i>

              {Profile}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link items-center gap-3 text-[16px] flex bg-white cursor-pointer w-[77px] text-mainText-color"
              to="/cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
