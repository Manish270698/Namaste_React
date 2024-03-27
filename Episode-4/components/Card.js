import { RES_IMG } from "../utils/constants";
import star from "../images/star.png";

const Card = (props) => {
  const { resData } = props;
  let { name, cuisines, costForTwo, sla, avgRating } = resData?.info;
  cuisines =
    cuisines.join(", ").length > 30
      ? cuisines.join(", ").slice(0, 30) + "..."
      : cuisines.join(", ");

  return (
    <div className="w-[300px] pb-10 hover:scale-95 dark:text-[#e2e8f0] md:w-[253px] lg:w-[253px] xl:w-[253px]">
      <img
        className="h-[200px] w-[300px] rounded-2xl object-cover md:h-[168px] md:w-[253px] lg:h-[168px] lg:w-[253px] xl:h-[168px] xl:w-[253px]"
        alt="restaurant image"
        src={RES_IMG + resData.info.cloudinaryImageId}
      ></img>
      <div className="pl-3 pt-2">
        <h4 className="text-lg font-medium">
          {name.length > 22 ? name.slice(0, 22) + "..." : name}
        </h4>
        <div className="flex items-center gap-1">
          {avgRating ? (
            <p className="flex items-center gap-1 font-medium">
              <img className="inline-block w-5" src={star} alt="rating" />
              {avgRating}
            </p>
          ) : null}
          •<p className="inline-block font-medium">{sla.deliveryTime} mins</p>
        </div>
        <p className="text-[#8490a5] dark:text-[#b4b4b6]">{costForTwo}</p>
        <p className="text-[#8490a5] dark:text-[#b4b4b6]">{cuisines}</p>
      </div>
    </div>
  );
};

export default Card;
