import { useState } from "react";
import SmallItem from "./SmallItem";
const MenuCard = ({ itemProp }) => {
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
            <SmallItem key={id} info={item?.card?.info} />
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
