// import resList from "../utils/mockData";
import Card from "./Card";
import { useState, useEffect } from "react";
import searchIcon from "../images/searchIcon.png";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => fetchData, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    console.log("if this is printed 1st then the json is empty");
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-cont">
      <div className="searchBar">
        {/* Whenever the state varibale changes, React re-renders the whole component. But only the chnaged part is updated */}
        <input
          id="search"
          type="search"
          placeholder="restaurants and cuisines"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            // To filter as we types
            if (restaurantList.length != 0) {
              const input = document.querySelector("#search").value;
              const filteredList = restaurantList.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(input.toLowerCase()) ||
                  res.info.cuisines
                    .join(",")
                    .toLowerCase()
                    .includes(input.toLowerCase())
              );
              setFilteredResList(filteredList);
            }
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            if (restaurantList.length != 0) {
              const input = document.querySelector("#search").value;
              const filteredList = restaurantList.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(input.toLowerCase()) ||
                  res.info.cuisines
                    .join(",")
                    .toLowerCase()
                    .includes(input.toLowerCase())
              );
              setFilteredResList(filteredList);
            }
          }}
        >
          <img className="icon" src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div>
        <button
          className="top-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-parent">
        <div className="res-container">
          {filteredResList.map((restaurant) => (
            <Card key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
