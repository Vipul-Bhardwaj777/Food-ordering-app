import { useSelector } from "react-redux";
import CartRight from "./CartRight";
import EmptyCart from "./EmptyCart";
import { DUMMY_IMG } from "../utils/constants";

const CarttPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="cart-main bg-[#e9ecee] h-full w-full flex-center justify-around ">
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

      <div className="cart-right w-[366px] h-[508px]    mt-[31px] bg-white shadow-sm">
        <div className="right-top">
          <img
            className="item-img h-[50px] w-[50px] rounded-md shadow-md cursor-pointer "
            src={DUMMY_IMG}
          />
          <h1>Enjoy Your Food</h1>
        </div>

        {cartItems.map((items, id) => (
          <CartRight key={id} info={items} />
        ))}
      </div>
    </div>
  );
};

export default CarttPage;
