import { useState } from "react";
import { MENU_CARD_IMGID } from "../utils/constants";
import SmallItem from "./SmallItem";
const MenuCard = (props) => {
  const { itemProp } = props;
  const { itemCardList, title } = itemProp;
  const [show, setShow] = useState(true);

  return (
    <div className="menu-cardMain">
      <div className="title flex" onClick={() => setShow(!show)}>
        <div className="title-left">
          <h3>
            {title}({itemCardList.length})
          </h3>
        </div>
        <div className="title-right">
          {show ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>

      <div className="menu-cardCont flex">
        {show &&
          itemCardList.map((item, id) => (
            <SmallItem kay={id} info={item?.card?.info} />
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
