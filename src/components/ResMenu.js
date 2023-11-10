import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import OfferCard from "./OfferCard";
import MenuCard from "./MenuCard";
import useMenuData from "../utils/useMenuData";

const ResMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);
  const [ActiveIndex, setActiveIndex] = useState(0);

  const [veg, setVeg] = useState(false);

  if (menuData === null) return <Shimmer />;
  const {
    name,
    cuisines,
    locality,
    city,
    feeDetails,
    sla,
    costForTwoMessage,
    totalRatingsString,
    avgRating,
  } = menuData?.cards[0]?.card?.card?.info;

  const infoWithStyles =
    menuData?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const { offers } = infoWithStyles;

  const { cards } = menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const filterCards = cards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(cards);

  console.log(filterCards);

  return (
    <div className="menu-main">
      <div className="menu-container w-[800px] mx-auto px-4 ">
        <div className="menu-search flex-center h-[52px] p-4 mb-4 mt-[10px] justify-between ">
          <div className="menu-search-left text-[10px] text-smallText-color">
            {city} / {name}
          </div>
          <div className="menu-search-right flex-center text-[18px] gap-6 cursor-pointer ">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="top-section flex-center h-[83px] mb-[18px] justify-between ">
          <div className="top-info">
            <h2 className="text-[20px] font-bold text-mainText-color ">
              {name}
            </h2>
            <p className="text-[13px] text-smallText-color">
              {cuisines.join(", ")}
            </p>
            <p className="text-[13px] text-smallText-color">
              {locality}, {sla.lastMileTravel} Km
            </p>
          </div>

          <div className="top-card h-[69px] w-[67px] rounded-md p-[9px] shadow-md border-border-color border  ">
            <p className="text-[14px] text-[#3d9b6d] font-bold ">
              <i className="fa-solid fa-star"></i>
              {avgRating}
            </p>
            <small className="text-[7.7px] text-smallText-color font-bold ">
              {totalRatingsString}
            </small>
          </div>
        </div>

        <div className="top-2 mb-[19px] text-[14px] text-smallText-color ">
          <p>
            <i className="fa-solid fa-person-biking"> </i> {feeDetails.message}
          </p>
        </div>

        <hr className="hr border-t border-dotted border-smallText-color mb-[18px]"></hr>

        <div className="time-cost flex-center text-mainText-color gap-[25px] font-bold text-[15px] mb-[19px] ">
          <p>
            <i className="fa-solid fa-clock"></i> {sla.maxDeliveryTime} MINS
          </p>
          <p>
            <i className="fa-solid fa-money-bill"></i> {costForTwoMessage}
          </p>
        </div>

        <div className="offer-cards flex-center gap-3 h-[73px] mb-[50px] overflow-hidden ">
          {offers.map((offer, offerIds) => (
            <OfferCard offerData={offer} key={offerIds} />
          ))}
        </div>

        <div className="veg-filter flex-center text-[14px] mb-6 gap-3 ">
          <p className="mb-[3px] text-[15px] font-bold">Veg Only</p>
          <div className="veg-filterBtn">
            <label className="relative inline-flex items-center cursor-pointer mt-[3px] ">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => {
                  setVeg(!veg);
                }}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:duration-300 after:ease-linear peer-checked:bg-green-600"></div>
            </label>
          </div>
        </div>

        <hr className="hr-veg border-t border-dotted border-smallText-color mb-[18px]"></hr>

        <div className="items-container">
          {filterCards.map((item, index) => {
            const itemCardList = veg
              ? item?.card?.card?.itemCards.filter(
                  (item) =>
                    item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                )
              : item?.card?.card?.itemCards;
            const title = item?.card?.card?.title;
            if (itemCardList === undefined || itemCardList.length === 0) {
              return <div key={index}></div>;
            } else {
              return (
                <MenuCard
                  key={index}
                  itemProp={{
                    itemCardList,
                    title,
                    showItems: index === ActiveIndex,
                    setActiveIndex: () => {
                      setActiveIndex((currActiveIndex) =>
                        currActiveIndex === index ? null : index
                      );
                    },
                  }}
                />
              );
            }
          })}
        </div>

        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default ResMenu;
