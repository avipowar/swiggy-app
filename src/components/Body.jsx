import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.JS";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body px-40 py-5 ">
      <div className="filter-btn m-3 mb-10">
        <button
          className="bg-gradient-to-r  from-purple-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl  cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Looking for top-rated restaurants? Click here
        </button>
      </div>

      <div className="RestaurantContainer flex flex-wrap gap-8 w-100%">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
