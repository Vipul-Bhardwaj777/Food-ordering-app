import { CLOUDINARY_CDN } from "../utils/constants";
import { STAR } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, locality, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CLOUDINARY_CDN + cloudinaryImageId} />
      <div className="card-text">
        <h3>{name}</h3>

        <div className="rating flex">
          <img className="rating-img" src={STAR} />
          <small>{avgRating}</small>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default ResCard;
