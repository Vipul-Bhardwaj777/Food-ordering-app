import { LOGO } from "../utils/constants";

const Header = () => (
  <nav className="nav-bar flex">
    <div className="nav-left flex">
      <img className="nav-img" src={LOGO} />
      <p>Palampur, Himachal Pradesh</p>
    </div>
    <div className="nav-right">
      <ul className="nav-list flex">
        <li>Offers</li>
        <li>Help</li>
        <li>Profile</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
);

export default Header;
