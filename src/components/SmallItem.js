import { MENU_CARD_IMGID } from "../utils/constants";
import { VEG } from "../utils/constants";
import { NON_VEG } from "../utils/constants";
import { DUMMY_IMG } from "../utils/constants";
const SmallItem = ({ info }) => {
  const { name, price, itemAttribute, description, imageId } = info;

  return (
    <div className="small-itemMain flex">
      <div className="smallItem-left">
        {itemAttribute?.vegClassifier === "VEG" ? (
          <img className="veg-nonveg" src={VEG} />
        ) : (
          <img className="veg-nonveg" src={NON_VEG} />
        )}
        <h4>{name}</h4>

        <p>₹ {price / 100}</p>
        {description != null ? (
          <small>{description}</small>
        ) : (
          <div className="desc-spacer"></div>
        )}
      </div>

      <div className="smallItem-right">
        {imageId != null ? (
          <img className="item-img" src={MENU_CARD_IMGID + imageId} />
        ) : (
          <img className="item-img" src={DUMMY_IMG} />
        )}
        <button className="addTo-cart">ADD</button>
      </div>
    </div>
  );
};

export default SmallItem;
