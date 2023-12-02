import { useDispatch } from "react-redux";
import { VEG, NON_VEG } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";

const CartRight = ({ info }) => {
  const { name, price, itemAttribute, quantity } = info;

  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(removeItem(info?.id));
  };
  const HandleAdd = () => {
    dispatch(addItem(info));
  };

  return (
    <div className="cart-rightMain " data-testid="cartItems">
      <div className="small  flex-center justify-between w-[289px] h-[51px]  py-[10px] ">
        <div className="first flex   gap-[10px]">
          {itemAttribute?.vegClassifier === "VEG" ? (
            <img className="veg-nonveg h-4 w-[14px] " src={VEG} />
          ) : (
            <img className="veg-nonveg h-4 w-[14px]" src={NON_VEG} />
          )}
          <h4 className="text-mainText-color font-medium text-[13px] w-[134px] ">
            {name.split(" ").slice(0, 6).join(" ")}
          </h4>
        </div>
        <div className="buttons flex-center text-[14px] w-[70px] h-[30px] bg-white border  border-gray-300 text-[#60b246] font-semibold ">
          <button
            className="remove text-smallText-color h-[30px] w-[22px]  text-[12px] cursor-pointer "
            onClick={HandleRemove}
            data-testid="cartRightRemoveBtn"
          >
            -
          </button>
          <div
            className="count h-[30px] w-[22px]  text-[12px] flex items-center justify-center "
            data-testid="CartItemQuant"
          >
            {quantity}
          </div>
          <button
            className="add cursor-pointer h-[30px] w-[22px]  text-[12px] "
            onClick={HandleAdd}
            data-testid="cartRightAddBtn"
          >
            +
          </button>
        </div>
        <div className="second">
          <p className="text-mainText-color text-[13px] font-medium ">
            ₹{(price / 100).toFixed()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartRight;
