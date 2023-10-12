import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [Profile, setProfile] = useState("Login");
  return (
    <nav className="nav-bar flex">
      <div className="nav-left flex">
        <Link to="/">
          <img className="nav-img" src={LOGO} />
        </Link>
        <p>Palampur, Himachal Pradesh</p>
      </div>
      <div className="nav-right">
        <ul className="nav-list flex">
          <li>
            <Link className="nav-link flex" to="/offers">
              <i className="fa-solid fa-gift"></i>
              Offers
            </Link>
          </li>
          <li>
            <Link className="nav-link flex" to="/help">
              <i className="fa-solid fa-comment"></i>
              Help
            </Link>
          </li>
          <li>
            <Link
              className="nav-link flex"
              onClick={() =>
                Profile === "Login" ? setProfile("Vipul") : setProfile("Login")
              }
            >
              <i className="fa-solid fa-user"></i>

              {Profile}
            </Link>
          </li>
          <li>
            <Link className="nav-link flex" to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Link>
          </li>
          <li>
            <Link className="nav-link flex" to="/profile">
              <i className="fa-solid fa-circle-info"></i>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
