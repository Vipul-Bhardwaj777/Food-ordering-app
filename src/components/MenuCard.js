import SmallItem from "./SmallItem";

const MenuCard = ({ itemProp }) => {
  const { itemCardList, title, setActiveIndex, showItems } = itemProp;
  return (
    <div className="menu-cardMain mb-6 border-b-[16px] border-[#f1f1f6] pb-4 ">
      <div
        id="`menuCardHeader-${itemProp.index}`"
        className="title flex-center justify-between mb-6 h-[21px] cursor-pointer "
        style={{ scrollMarginTop: "10px" }}
        onClick={() => setActiveIndex()}
        data-testid="menuCardHeade"
      >
        <div className="title-left">
          <h3 className="text-mainText-color font-bold text-[18px] ">
            {title}({itemCardList.length})
          </h3>
        </div>
        <div className="title-right">
          {showItems ? (
            <i className="fa-solid fa-chevron-up mr-4 items-center mb-[10px] "></i>
          ) : (
            <i className="fa-solid fa-chevron-down mr-4 items-center mb-[10px] "></i>
          )}
        </div>
      </div>

      <div className="menu-cardCont flex-center flex-col gap-5 ">
        {showItems &&
          itemCardList.map((item, id) => (
            <SmallItem key={id} info={item?.card?.info} />
          ))}
      </div>
    </div>
  );
};

export default MenuCard;
