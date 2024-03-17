// import resList from "../utils/mockData";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import searchIcon from "../images/searchIcon.png";
import Shimmer from "./Shimmer";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const { restaurantList, filteredResList, setFilteredResList } =
    useRestaurants();

  const [searchText, setSearchText] = useState("");

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
            // To filter as we type
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
            const filteredList = filteredResList.filter(
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
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <Card key={restaurant?.info?.id} resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
