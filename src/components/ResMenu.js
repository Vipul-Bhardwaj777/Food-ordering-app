import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import OfferCard from "./OfferCard";
import MenuCard from "./MenuCard";

const ResMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const Data = await fetch(MENU_API + resId);
      const json = await Data.json();
      setMenuData(json?.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  const { offers } =
    menuData?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

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

        <div className="veg-filter">
          <button className="filter-btns">Veg Only</button>
        </div>
        <hr className="hr-veg"></hr>

        <div className="items-container">
          {cards.map((nextCard, id) =>
            nextCard?.card?.card?.itemCards === undefined ? (
              <div></div>
            ) : (
              <MenuCard
                key={id}
                itemProp={{
                  itemCardList: nextCard?.card?.card?.itemCards,
                  title: nextCard?.card?.card?.title,
                }}
              />
            )
          )}
        </div>

        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default ResMenu;
