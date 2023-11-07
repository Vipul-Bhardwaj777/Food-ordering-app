import { CLOUDINARY_CDN } from "../utils/constants";
import { STAR } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, locality, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card w-[200px] h-60 m-[15px] cursor-pointer transition-all duration-200 ease-linear hover:scale-[0.9] ">
      <img
        className="res-img w-full h-[135px] rounded-[20px] "
        src={CLOUDINARY_CDN + cloudinaryImageId}
      />
      <div className="card-text pl-[11px]">
        <h3 className="card-name text-[18px] text-mainText-color whitespace-nowrap w-[90%] overflow-hidden overflow-ellipsis ">
          {name}
        </h3>

        <div className="rating flex-center gap-1 ">
          <img className="rating-img w-[14px]" src={STAR} />
          <small className="text-mainText-color text-[16px]">{avgRating}</small>
        </div>
        <p className="cuisines text-smallText-color text-[14px] whitespace-nowrap w-[90%] overflow-hidden overflow-ellipsis">
          {cuisines.join(", ")}
        </p>
        <p className="card-locality text-smallText-color text-[14px]">
          {locality}
        </p>
      </div>
    </div>
  );
};

export default ResCard;
