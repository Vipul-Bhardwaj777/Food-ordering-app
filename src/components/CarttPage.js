import { useDispatch, useSelector } from "react-redux";
import CartRight from "./CartRight";
import EmptyCart from "./EmptyCart";
import { DUMMY_IMG } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const CarttPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const sum = cartItems.reduce(
    (acc, curr) => (acc += (curr.price * curr.quantity) / 100),
    0
  );
  const dispatch = useDispatch();
  const HandleClear = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="cart-main  bg-[#e9ecee] h-full w-full flex-center justify-around ">
      <div className="cart-left h-[508px] w-[779px] relative mt-[31px]">
        <div className="address h-[396px] mb-5 bg-white shadow-sm px-10 py-9 ">
          <div className="location shadow-md absolute h-10 w-10 bg-[#282c3f] flex-center justify-center -left-5">
            <i className="fa-solid fa-location-dot text-white text-[14px] "></i>
          </div>
          <h1 className=" text-[18px] font-semibold ">
            Add a delivery address
          </h1>
          <h2 className="text-[16px] text-smallText-color mb-9 ">
            You seem to be in the new location
          </h2>
          <div className="new-address hover:shadow-xl cursor-pointer w-[324px] h-[218px] border border-dotted border-gray-200  flex p-[22px] gap-5 ">
            <i className="fa-solid fa-location-dot text-[#60b246] text-[19px] "></i>

            <div className="flex flex-col justify-start">
              <h2 className="text-[17px]"> Add New Address</h2>
              <p className="text-smallText-color text-[13px] mb-[30px] ">
                WJPF+3QH, KHB Colony, Koramangala 4th Block, Koramangala,
                Bengaluru, Karnataka 560034, India
              </p>
              <button className="text-[14px] w-[130px] h-[34px] bg-white border-[1.5px] border-[#60b246] text-[#60b246] font-semibold">
                ADD NEW
              </button>
            </div>
          </div>
        </div>
        <div className="payment relative h-[92px] bg-white shadow-sm text-[18px] text-smallText-color font-semibold p-[38px] ">
          <div className="wallet shadow-md absolute h-10 w-10 bg-white flex-center justify-center -left-5 top-8 ">
            <i className="fa-regular fa-credit-card text-[14px] "></i>
          </div>
          Payment
        </div>
      </div>

      <div className="cart-right ">
        <div className="cart-rightTop overflow-scroll scrollbar-hidden relative w-[366px] h-[448px]   mt-[31px] bg-white shadow-sm px-[30px] py-5 ">
          <div className="right-top flex-center w-[242px] h-[64px] gap-[14px] ">
            <img
              className="item-img h-[50px] w-[50px] rounded-md shadow-md cursor-pointer "
              src={DUMMY_IMG}
            />
            <div className="top-text">
              <h1 className="text-[17px] font-medium ">Just One Step Away</h1>
              <p className="text-[13px] text-smallText-color ">
                Enjoy your food
              </p>
            </div>
          </div>

          <div className="right-items flex flex-col gap-3 mt-[20px] mb-[15px]">
            {cartItems.map((items, id) => (
              <CartRight key={id} info={items} />
            ))}
          </div>

          <div className="feedback">
            <input
              type="text"
              className="  w-[289px] h-[51px] bg-[#f9f9f9] text-[12px] p-4 mb-[15px] outline-none "
              placeholder=" Any suggestions? We will pass it on..."
            />
          </div>
          <div className="delivery cursor-pointer  hover:shadow-md border border-smallText-color h-[95px] w-[289px] pl-[30px] py-[6px] mb-[10px] relative">
            <input
              className=" cursor-pointer absolute left-[5px] top-3"
              type="checkbox"
              name=""
              id=""
            />{" "}
            <div>
              <h1 className="text-[13px] font-medium ">
                Opt in for NO-contact Delivery
              </h1>
              <p className="text-[12px] text-smallText-color ">
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door.
              </p>
            </div>
          </div>

          <div className="coupon hover:shadow-md  cursor-pointer h-[55px] w-[289px] p-[16px] flex-center gap-4 border-dotted border border-black text-[#535665]">
            <i className="fa-solid fa-percent text-[13px] "></i>
            <h1 className="text-[14px] font-medium ">Apply Coupon</h1>
          </div>
        </div>

        <div className="pay p-[30px]  w-[366px] h-[60px] flex-center justify-between font-bold  bg-white shadow-lg  ">
          <h1>TO PAY</h1>
          <button
            className="text-[14px] w-[100px] h-[30px] bg-white border-[1.5px] border-[#60b246] text-[#60b246] font-semibold hover:shadow-md"
            onClick={HandleClear}
          >
            Clear Cart
          </button>
          <h1>₹{sum.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

export default CarttPage;
