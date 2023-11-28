import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResListData from "../utils/useResListData";
import ResCard from "./ResCard";
import Footer from "./Footer";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const OfferPage = () => {
  const ResList = useResListData();
  const [filterList, setFilterList] = useState([]);
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
        (restaurant) => restaurant?.info?.avgRating > 4.3
      );
      setFilterList(filteredList);
      setFilter(!filter);
      setIsActive(true);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <OfflinePage />;
  }

  return ResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="offerPageMain  ">
      <div className="container">
        <h1 className="top ml-[15px] text-smallText-color mt-12 ">
          Home/Offers
        </h1>
      </div>

      <div className="container res-section mt-8 py-4 ">
        <h2 className="ml-[15px] mb-[19px] text-[24px] font-semibold ">
          Restaurants With Great Offers Near Me
        </h2>

        <div className="filter-container py-[3px] mb-[17px] ">
          <ul className="filter-list flex-center">
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Filters
                <i className="fa-solid fa-sliders ml-[5px] text-[14px]"></i>
              </button>
            </li>
            <li>
              <button
                className={`filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ${
                  isActive ? "active-filter" : "inactive-filter"
                }`}
                onClick={updateRatingList}
              >
                Rating 4.0+
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
            <li>
              <button className="filter-btns text-mainText-color cursor-pointer ml-[15px] rounded-full text-[14px] shadow-lg border border-[rgb(226, 226, 237)] bg-white w-[100px] h-[37px] ">
                Rating{" "}
              </button>
            </li>
          </ul>
        </div>

        <div className="card-section flex-center flex-wrap">
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
      <hr className="hr border-t border-dotted border-smallText-color mb-[64px]"></hr>

      <div className="small-section container border-2 h-[223px] rounded-xl pt-[45px] px-[17px]  ">
        <h1 className="head text-[28px] font-bold text-gray-500 mb-4">
          Get the best offers on the food from top restaurants near you
        </h1>
        <p className="para text-[16px] text-smallText-color ">
          Get ready for a scrumptious adventure filled with unbeatable offers on
          your favourite foods and restaurants. Whether you're in the mood for a
          cheesy pizza, a sizzling burger, or a delightful bowl of pasta, now is
          the perfect time to satisfy your cravings while saving big. All the
          top-rated restaurants and popular eateries are rolling out enticing
          deals and discounts that are too good to resist.
        </p>
      </div>

      <div className="footer mt-[98px]">
        <Footer />
      </div>
    </div>
  );
};

export default OfferPage;
