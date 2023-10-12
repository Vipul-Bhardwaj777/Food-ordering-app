import { MENU_CARD_IMGID } from "../utils/constants";

const MenuCard = (listProp) => {
  const { itemList } = listProp;
  const { title, itemCards } = itemList?.card?.card;
  //   name, price, itemAttribute, description, imageId, category
  console.log(itemCards)
//   itemCards.map((item) => (
//     console.log(item)
//   ));
  return (
    <div className="menu-cardMain">
      <div className="mcard-header">
        <h3>
          {title}
        </h3>
      </div>
      <div className="menuCard-left">
        <h4>{}</h4>
        <p>{}</p>
        <small>{}</small>
      </div>
      <div className="menuCard-right">
        {/* <img className="item-img" src={} /> */}
      </div>
    </div>
  );
};

export default MenuCard;
