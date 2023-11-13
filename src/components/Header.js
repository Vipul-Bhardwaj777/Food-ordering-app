import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () => {
  const [Profile, setProfile] = useState("Login");
  const { loginUser } = useContext(userContext);
  return (
    <nav className="nav-bar flex-center justify-between h-20  shadow-lg sticky top-0 z-10 bg-white text-mainText-color">
      <div className="nav-left h-20 flex-center ">
        <Link to="/">
          <img className="nav-img w-20 ml-4 " src={LOGO} />
        </Link>
        <p className="text-[14px] ml-10 cursor-pointer hover:text-smallText-color transition">
          <span className="hover:text-swiggy-color border-b-2 border-black font-bold">
            Palampur
          </span>
          , Himachal Pradesh, India
        </p>
      </div>

      <div className="nav-right">
        <ul className="nav-list flex text-[16px] gap-[60px] px-8">
          <li>
            <Link
              className="nav-link flex-center hover:text-swiggy-color transition  gap-3 text-[16px]  bg-white cursor-pointer w-[77px] text-mainText-color"
              to="/help"
            >
              <i className="fa-solid fa-comment"></i>
              Help
            </Link>
          </li>
          <li>
            <Link
              className="nav-link flex-center hover:text-swiggy-color transition  gap-3 text-[16px]  bg-white cursor-pointer w-[77px] text-mainText-color"
              to="/offers"
            >
              <i className="fa-solid fa-gift"></i>
              Offers
            </Link>
          </li>
          <li>
            <Link
              className="nav-link flex-center hover:text-swiggy-color transition  gap-3 text-[16px]  bg-white cursor-pointer w-[77px] text-mainText-color"
              onClick={() =>
                Profile === "Login"
                  ? setProfile(`${loginUser}`)
                  : setProfile("Login")
              }
            >
              <i className="fa-solid fa-user"></i>

              {Profile}
            </Link>
          </li>
          <li>
            <Link
              className="nav-link flex-center hover:text-swiggy-color transition  gap-3 text-[16px]  bg-white cursor-pointer w-[77px] text-mainText-color"
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
