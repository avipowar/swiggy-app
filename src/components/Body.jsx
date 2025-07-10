import React, { useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_INFO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// UserContext

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  const { loggedUser, setUserName } = useContext(UserContext);
  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_INFO_URL);

    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // check user is online or offline

  const useIsOnline = useOnlineStatus();

  // console.log(useIsOnline);

  if (useIsOnline === false) {
    return (
      <div className="flex justify-center items-center mt-30">
        <div className="w-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
          ⚠️ You are currently offline. Some features may not be available.
        </div>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-40 py-5 ">
      <div className="flex m-3 mb-10">
        <div className="mr-20 ml-8">
          <input
            className="border border-gray-500 font-semibold py-3 px-6 rounded-md  cursor-pointer w-100 outline-none rounded-tr-none rounded-br-none"
            type="text"
            value={searchRestaurant}
            placeholder="Search for restaurants and food"
            onChange={(e) => {
              setSearchRestaurant(e.target.value);
              console.log(searchRestaurant);
            }}
          />
          <button
            className="border border-gray-500 font-semibold py-3 px-6 rounded-md  cursor-pointer rounded-tl-none rounded-bl-none"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchRestaurant.toLowerCase())
              );

              setFilteredList(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
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
      </div>

      <div>
        <input
          type="text"
          value={loggedUser}
          className="border border-black p-2 m-4"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="RestaurantContainer flex flex-wrap gap-8 w-100%">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
