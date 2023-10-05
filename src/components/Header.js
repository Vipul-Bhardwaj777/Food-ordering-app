import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [Profile, setProfile] = useState("Login");

  return (
    <nav className="nav-bar flex">
      <div className="nav-left flex">
        <img className="nav-img" src={LOGO} />
        <p>Palampur, Himachal Pradesh</p>
      </div>
      <div className="nav-right">
        <ul className="nav-list flex">
          <li>
            <button className="login-btn flex">
              <i class="fa-solid fa-gift"></i>
              Offer
            </button>
          </li>
          <li>
            <button className="login-btn flex">
              <i class="fa-solid fa-comment"></i>
              Help
            </button>
          </li>
          <li>
            <button
              className="login-btn flex"
              onClick={() =>
                Profile === "Login" ? setProfile("Vipul") : setProfile("Login")
              }
            >
              <i class="fa-solid fa-user"></i>

              {Profile}
            </button>
          </li>
          <li>
            <button className="login-btn flex">
              <i class="fa-solid fa-cart-shopping"></i>
              Cart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
