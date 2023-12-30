import { useDispatch, useSelector } from "react-redux";
import { MENU_CARD_IMGID } from "../utils/constants";
import { VEG } from "../utils/constants";
import { NON_VEG } from "../utils/constants";
import { DUMMY_IMG } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";
import { useEffect } from "react";

const SmallItem = ({ info }) => {
  const { name, price, defaultPrice, itemAttribute, description, imageId } =
    info;

  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const [quant, setQuant] = useState("");
  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === info.id);

    setQuant(cartItem ? `( ${cartItem.quantity} )` : "");
  }, [cartItems]);

  const HandleAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem(info));
  };
  const HandleRemoveItem = (e) => {
    e.preventDefault();
    dispatch(removeItem(info.id));
  };

  return (
    <div
      className="small-itemMain flex-center border-b border-dotted border-smallText-color justify-between gap-5 pb-5 w-full "
      data-testid="smallItemMain"
    >
      <div className="smallItem-left max-w-[632px] ">
        {itemAttribute?.vegClassifier === "VEG" ? (
          <img className="veg-nonveg h-4 w-[14px] mb-1 " src={VEG} />
        ) : (
          <img className="veg-nonveg h-4 w-[14px] mb-1 " src={NON_VEG} />
        )}
        <h4 className="text-mainText-color font-medium text-[17px] mb-1 ">
          {name}
        </h4>

        <p className="text-mainText-color text-[14px] mb-[14px] ">
          ₹ {price === undefined ? defaultPrice / 100 : price / 100}
        </p>
        {description != null ? (
          <small className="text-smallText-color text-[12px] font-extralight ">
            {description}
          </small>
        ) : (
          <div className="desc-spacer"></div>
        )}
      </div>

      <div className="smallItem-right w-[118px]">
        {imageId != null ? (
          <img
            className="item-img h-[96px] w-[118px] rounded-md shadow-md cursor-pointer "
            src={MENU_CARD_IMGID + imageId}
          />
        ) : (
          <img
            className="item-img h-[96px] w-[118px] rounded-md shadow-md cursor-pointer "
            src={DUMMY_IMG}
          />
        )}
        <div className="addTo-cart flex-center justify-between text-[12px] w-[120px] h-10 text-[#3d9b6d] font-bold bg-white hover:shadow-md border border-border-color rounded-md relative top-0 cursor-pointer   ">
          <button
            className="addTo-cart  text-[12px] w-6 h-9  text-[#3d9b6d] font-bold bg-white rounded-sm relative top-0 cursor-pointer   "
            onClick={HandleRemoveItem}
            data-testid="removeBtn"
          >
            -
          </button>
          <button
            className="addTo-cart  text-[12px] w-14 h-9  text-[#3d9b6d] font-bold bg-white rounded-sm relative top-0 cursor-pointer   "
            onClick={HandleAddItem}
            data-testid="addBtn"
          >
            ADD {quant}
          </button>

          <button
            className="addTo-cart text-[12px]  w-8 h-9  text-[#3d9b6d] font-bold bg-white rounded-sm relative top-0 cursor-pointer  "
            onClick={HandleAddItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallItem;
