import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => (
  <nav className="nav-bar flex">
    <div className="nav-left flex">
      <img
        className="nav-img"
        src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1695823021~exp=1695823621~hmac=c5222cd84a9699d26d7d27ab0c6e3fd6eaa096882a2211d6639cdfea3606b011"
      />
      <p>Palampur, Himachal Pradesh</p>
    </div>
    <div className="nav-right">
      <ul class="nav-list flex">
        <li>Offers</li>
        <li>Help</li>
        <li>Profile</li>
        <li>Cart</li>
      </ul>
    </div>
  </nav>
);
const Search = () => (
  <div className="search flex">
    <div className="search-1">
      <h1>Tomato</h1>
      <p>Discover the best food & drinks</p>
    </div>

    <div className="search-2 flex">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
      <button className="search-btn">
        <i className="fa-sharp fa-solid fa-2x fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
);
const ResCard = () => (
  <div className="res-card container">
    <img
      className="res-img"
      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qltgnkyywuo5gmnpqzbm"
    />
    <div className="card-text">
      <h3>Hotel Empire</h3>
      <p>4.3 stars</p>
      <p>North Indian, Biryani, Asian</p>
    </div>
  </div>
);
const Main = () => (
  <div className="main">
    <Search />

    <div className="container res-section flex">
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
    </div>
  </div>
);
const AppLayout = () => (
  <div className="app">
    <Header />
    <Main />
  </div>
);

root.render(<AppLayout />);
