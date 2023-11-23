import { useDispatch, useSelector } from "react-redux";
import SmallItem from "./SmallItem";
import { clearCart } from "../utils/cartSlice";
import CarttPage from "./CarttPage";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container ">
      {/* <button
        className="bg-mainText-color text-white font-medium p-[3px] rounded-md m-3 mx-auto cursor-pointer hover:bg-smallText-color  duration-150  "
        onClick={clearHandler}
      >
        Clear cart
      </button> */}

      <div className="menu-cardCont flex-center flex-col gap-5 ">
        {cartItems.length === 0 && <EmptyCart />}
        {cartItems.map((info, id) => (
          <CarttPage key={id} infoProp={info} />
        ))}
      </div>
    </div>
  );
};
export default CartPage;
