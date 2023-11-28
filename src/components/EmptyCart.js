import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="empty-main h-[86vh] w-full flex-center flex-col justify-center items-center">
      <h1 className="text-mainText-color text-[20px] font-bold mb-2 ">
        Yout cart is empty
      </h1>
      <h2 className="text-[14px] text-smallText-color mb-[30px] ">
        You can go to home page to view more restaurants
      </h2>
      <Link to="/offers">
        <button className="text-[15px] text-white w-[255px] h-10 bg-[#fc8019] font-bold py-[11px] px-5 hover:shadow-lg">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
