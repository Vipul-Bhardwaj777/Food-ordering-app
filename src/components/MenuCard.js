import { MENU_CARD_IMGID } from "../utils/constants";
import SmallItem from "./SmallItem";
const MenuCard = (listProp) => {
  const { itemList } = listProp;
  const { itemCards } = itemList[1]?.card?.card;
  console.log(itemList[1]?.card?.card);
  console.log(itemList);
  const { title } = itemList[1]?.card?.card;

  return (
    <div className="menu-cardMain">
      <div className="title flex">
        <div className="title-left">
          <h3>{title}()</h3>
        </div>
        <div className="title-right">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>

      <div className="menu-cardCont flex">
        {itemCards.map((item, id) => (
          <SmallItem kay={id} info={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
