import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import OfferCard from "./OfferCard";
import MenuCard from "./MenuCard";
import useMenuData from "../utils/useMenuData";

const ResMenu = () => {
  const { resId } = useParams();
  const menuData = useMenuData(resId);

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
  return (
    <div className="menu-main">
      <div className="menu-container">
        <div className="menu-search flex">
          <div className="menu-search-left">
            {city} / {name}
          </div>
          <div className="menu-search-right flex">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="top-section flex">
          <div className="top-info">
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>
              {locality}, {sla.lastMileTravel} Km
            </p>
          </div>

          <div className="top-card">
            <p>
              <i className="fa-solid fa-star"></i>
              {avgRating}
            </p>
            <small>{totalRatingsString}</small>
          </div>
        </div>

        <div className="top-2">
          <p>
            <i className="fa-solid fa-person-biking"> </i> {feeDetails.message}
          </p>
        </div>

        <hr className="hr"></hr>

        <div className="time-cost flex">
          <p>
            <i className="fa-solid fa-clock"></i> {sla.maxDeliveryTime} MINS
          </p>
          <p>
            <i className="fa-solid fa-money-bill"></i> {costForTwoMessage}
          </p>
        </div>

        <div className="offer-cards flex">
          {offers.map((offer, offerIds) => (
            <OfferCard offerData={offer} key={offerIds} />
          ))}
        </div>

        <div className="veg-filter flex">
          <p>Veg Only</p>
          <div className="veg-filterBtn">
            <input
              type="checkbox"
              id="toggle"
              onChange={() => {
                setVeg(!veg);
              }}
            />
            <label htmlFor="toggle" className="switch"></label>
          </div>
        </div>

        <hr className="hr-veg"></hr>

        <div className="items-container">
          {cards.map((nextCard, id) => {
            const itemCards = nextCard?.card?.card?.itemCards;
            if (itemCards === undefined) {
              return <div key={id}></div>;
            }
            const itemCardList = veg
              ? nextCard?.card?.card?.itemCards.filter(
                  (item) =>
                    item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                )
              : nextCard?.card?.card?.itemCards;
            const title = nextCard?.card?.card?.title;
            if (itemCardList === undefined || itemCardList.length === 0) {
              return <div key={id}></div>;
            } else {
              return (
                <MenuCard
                  key={id}
                  itemProp={{
                    itemCardList,
                    title,
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
