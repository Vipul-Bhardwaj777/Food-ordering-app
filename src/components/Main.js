import ResCard from "./ResCard";
import { SAPI } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Main = () => {
  const [ResList, setResList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const updateRatingList = () => {
    const filteredList = ResList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );
    setFilterList(filteredList);
  };

  const updateSearchList = () => {
    const searchFilteredList = ResList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilterList(searchFilteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = () => {
  //   fetch(SAPI)
  //     .then((response) => response.json())
  //     .then((json) =>
  //       setResList(
  //         json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //           ?.restaurants
  //       )
  //     )
  //     .catch((error) => alert(error));
  // };

  const fetchData = async () => {
    try {
      const data = await fetch(SAPI);

      const json = await data.json();
      const mainResList =
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(mainResList);
      setFilterList(mainResList);
    } catch (error) {
      alert(error);
    }
  };

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
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
            value={searchTxt}
            onChange={(event) => setSearchTxt(event.target.value)}
          />
          <button className="search-btn" onClick={updateSearchList}>
            <i className="fa-sharp fa-solid fa-2x fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="container res-section">
        <h2>Restaurants with online food delivery near you</h2>

        <div className="filter-container">
          <ul className="filter-list flex">
            <li>
              <button
                className="filter-btns"
                onClick={() => {
                  setFilterList(ResList);
                }}
              >
                All available
              </button>
            </li>
            <li>
              <button className="filter-btns" onClick={updateRatingList}>
                Rating 4.0+
              </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
            <li>
              <button className="filter-btns">Rating </button>
            </li>
          </ul>
        </div>

        <div className="card-section flex">
          {filterList.map((restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
