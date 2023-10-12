const OfferCard = (offerDataprop) => {
  const { offerData } = offerDataprop;
  const {header, description, couponCode} = offerData?.info;
  return (
    <div className="offer-main">
      <div className="offer-card">
        <h3>
          <i className="fa-solid fa-money-bills"> </i>
          {header}
        </h3>
        <p>{couponCode} | {description}</p>
      </div>
    </div>
  );
};

export default OfferCard;
