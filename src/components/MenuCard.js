import { MENU_CARD_IMGID } from "../utils/constants";
import SmallItem from "./SmallItem";
const MenuCard = (props) => {
  const { itemProp } = props;
  const { itemCardList, title } = itemProp;

  console.log(itemCardList);
  return (
    <div className="menu-cardMain">
      <div className="title flex">
        <div className="title-left">
          <h3>
            {title}({itemCardList.length})
          </h3>
        </div>
        <div className="title-right">
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>

      <div className="menu-cardCont flex">
        {itemCardList.map((item, id) => (
          <SmallItem kay={id} info={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default MenuCard;
