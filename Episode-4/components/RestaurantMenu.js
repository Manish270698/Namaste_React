import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Error from "/components/Error";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);

  // const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setResInfo(json.data);
    console.log(
      
    );
  };

  if (resInfo.length < 10) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, areaName, avgRatingString } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    ?.cards[2]?.card?.card?.itemCards
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
  console.log("itemCards:", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <br />
      <p>{cuisines + " - " + costForTwoMessage}</p>
      <p>{areaName}</p>
      <p>{avgRatingString} stars</p>
      <br />
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs{" "}
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>

      {/* <p>{itemCards[0]?.card?.info?.name}</p> */}
    </div>
  );
};

export default RestaurantMenu;
