import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResListData from "../utils/useResListData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Main = () => {
  const ResList = useResListData();
  const [filterList, setFilterList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filter, setFilter] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setFilterList(ResList);
  }, [ResList]);

  const updateRatingList = () => {
    if (filter) {
      setFilterList(ResList);
      setFilter(false);
      setIsActive(false);
    } else {
      const filteredList = ResList.filter(
        (restaurant) => restaurant?.info?.avgRating > 4
      );
      setFilterList(filteredList);
      setFilter(!filter);
      setIsActive(true);
    }
  };

  const updateSearchList = () => {
    const searchFilteredList = ResList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchTxt.toLowerCase())
    );
    setFilterList(searchFilteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="search flex-center flex-col w-[100%] h-[40vh] justify-center bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-cover bg-no-repeat mb-8 bg-[center_-8rem] ">
        <div className="search-1 my-[10px] text-center text-white ">
          <h1 className="text-[45px] font-gothic ">Tomato</h1>
          <p className="text-[30px]">Discover the best food & drinks</p>
        </div>

        <div className="search-2 flex-center bg-white rounded-[5px] px-[15px] ">
          <input
            className="search-bar h-[42px] w-[35vw] outline-none p-[10px]  "
            type="text"
            placeholder="Search for restaurants"
            value={searchTxt}
            onChange={(event) => setSearchTxt(event.target.value)}
          />
          <button
            className="search-btn text-gray-400 bg-white border-none"
            onClick={updateSearchList}
          >
            <i className="fa-sharp fa-solid fa-magnifying-glass text-[22px] cursor-pointer"></i>
          </button>
        </div>
      </div>

      <div className="container res-section">
        <h2>Restaurants with online food delivery near you</h2>

        <div className="filter-container">
          <ul className="filter-list flex">
            <li>
              <button className="filter-btns">
                Filters<i className="fa-solid fa-sliders"></i>
              </button>
            </li>
            <li>
              <button
                className={`filter-btns ${
                  isActive ? "active-filter" : "inactive-filter"
                }`}
                onClick={updateRatingList}
              >
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
            <Link
              className="card-link"
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <ResCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
