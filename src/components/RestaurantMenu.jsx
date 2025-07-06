/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */

import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import DisplayCategory from "./DisplayCategory";

const RestaurantMenu = () => {
  // see the id in url and give it
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const cuisines = resInfo?.data?.cards[2]?.card?.card?.info.cuisines;

  const { minDeliveryTime, maxDeliveryTime } =
    resInfo?.data?.cards[2]?.card?.card?.info?.sla;

  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const displayCategorys =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(c);

  return (
    <div className="flex  justify-center p-8 w-full">
      <div className="w-[65%]">
        <h1 className="font-bold text-4xl">{name}</h1>
        {/* div men menu */}
        <div className="border border-gray-400 rounded-2xl  p-6 ml-2 shadow-md mt-10">
          <div className="flex gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3SK25amB1wZlnisCPy-DifGYIZL_JthwvA&s"
              alt="rating-img"
              className="h-5 mt-0.5"
            />
            <h1 className="font-bold text-xl">
              {avgRatingString} ({totalRatingsString}) •{costForTwoMessage}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-orange-500 mt-2 mb-2 underline">
              {cuisines.join(", ")}
            </h1>
            <div className="flex">
              <div className="mt-2.5 mr-3 ">
                <div className="w-2 ml-1 h-2 bg-black rounded-full"></div>
                <div className="ml-1.5 h-7 border-l-2 border-dashed border-black"></div>
                <div className="w-2 ml-1 h-2 bg-black rounded-full"></div>
              </div>
              <div className="">
                <h1 className="mt-0.5 font-bold">
                  Outlet{" "}
                  <span className="ml-3 font-normal text-gray-500">
                    {areaName}
                  </span>
                </h1>
                <h1 className="mt-3 font-bold text-md">
                  {minDeliveryTime}-{maxDeliveryTime} mins
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 mt-10"></div>
        {/* menu section */}
        {displayCategorys.map((c, index) => (
          <DisplayCategory key={index} data={c.card.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
