import { RES_IMG } from "../utils/constants";

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
        alt="res image"
        src={RES_IMG + resData.info.cloudinaryImageId}
      ></img>
      <div className="res-info">
        <h4>{name}</h4>
        <h5>{cuisines}</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla.deliveryTime} mins</h5>
        <h5>{avgRating} stars</h5>
      </div>
    </div>
  );
};

export default Card;
