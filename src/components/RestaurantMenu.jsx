import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import React from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.7035291&lng=74.2432304&restaurantId=120859&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    console.log(json);
    setResInfo(json);
  };

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

  // menu destructed
  console.log(
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card
  );

  const { title, itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="flex  justify-center p-8 w-full">
      <div className="w-[65%]">
        <h1 className="font-bold text-4xl">{name}</h1>
        {/* div men menu */}
        <div className="border border-gray-400 rounded-2xl mt-5 p-6 ml-2 shadow-md mt-10">
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
        <h1 className="font-bold text-2xl mt-3">{title}</h1>
        <div className="">
          <ul className="list-disc  px-10 py-4">
            {itemCards.map((item) => (
              <li
                key={item?.card?.info?.id}
                className="text-lg font-semibold text-gray-700 "
              >
                {item?.card?.info?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
