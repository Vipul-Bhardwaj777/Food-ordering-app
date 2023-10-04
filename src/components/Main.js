import Search from "./search";
import ResCard from "./ResCard";
import { SAPI } from "../utils/constants";
import { useEffect, useState } from "react";

const Main = () => {
  const [ResList, setResList] = useState([]);

  const updateList = () => {
    const filteredList = ResList.filter(
      (restaurant) => restaurant?.info?.avgRating > 4
    );
    setResList(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SAPI);

      const json = await data.json();
      const mainResList =
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(mainResList);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="main">
      <Search />

      <div className="container res-section">
        <h2>Restaurants with online food delivery near you</h2>

        <div className="filter-container">
          <ul className="filter-list flex">
            <li>
              <button className="filter-btns">All available</button>
            </li>
            <li>
              <button className="filter-btns" onClick={updateList}>
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
          {ResList.map((restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
