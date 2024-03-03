import { RES_IMG } from "../utils/constants";
import star from "../images/star.png"

const Card = (props) => {
  const { resData } = props;
  let { name, cuisines, costForTwo, sla, avgRating } = resData?.info;
  cuisines =
    cuisines.join(", ").length > 30
      ? cuisines.join(", ").slice(0, 25) + "..."
      : cuisines.join(", ");

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="restaurant image"
        src={RES_IMG + resData.info.cloudinaryImageId}
      ></img>
      <div className="res-info">
        <h4>{name.length > 30 ? name.slice(0, 22) + "..." : name}</h4>
        <p>{cuisines}</p>
        <p>{costForTwo}</p>
        <p>{sla.deliveryTime} mins</p>
        <p className="rating"><img src={star} alt='rating' />{avgRating}</p>
      </div>
    </div>
  );
};

export default Card;
