import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData.JS";

const Body = () => {
  return (
    <div className="body px-40 py-10">
      <div className="search">search</div>
      <div className="RestaurantContainer flex flex-wrap gap-8 w-100%">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
