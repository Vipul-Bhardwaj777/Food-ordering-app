const OfferCard = (offerDataprop) => {
  const { offerData } = offerDataprop;
  const { header, description, couponCode } = offerData?.info;
  return (
    <div className="offer-main">
      <div className="offer-card border border-border-color shadow-md h-[68px] w-[185px] rounded-md p-[9px] ">
        <h3 className="text-[14px] font-bold mb-[3px] text-[#686b78] ">
          <i className="fa-solid fa-money-bills mr-2 text-swiggy-color  "> </i>
          {header}
        </h3>
        <p className="text-smallText-color text-[10px] font-bold ">
          {couponCode} | {description}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
