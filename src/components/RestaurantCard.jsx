import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRatingString, areaName, cuisines, cloudinaryImageId } =
    resData.info;
  const { slaString } = resData.info.sla;

  return (
    <div className="res-card ">
      <div className="res-logo">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="h-40 w-60  rounded-2xl"
        />
        <div className="p-3 w-60">
          <h3 className="text-xl font-bold">{name}</h3>
          <h3 className="flex items-center gap-2 text-sm text-[#282c3f] font-medium">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSokvLLBOHLxXQqxAnbEb5VEQKK8rzhSNwXrT-Tgkur0eYfaqPfr_U1ErWRGtwT1e-SnLE&usqp=CAU"
              alt="rating-img"
              className="w-4 h-4"
            />
            <span className="text-lg">{avgRatingString} •</span>
            <span className="text-lg  text-black">{slaString}</span>
          </h3>
          <h3 className="text-lg font-medium text-gray-600 truncate  overflow-hidden whitespace-nowrap">
            {cuisines.join(", ")}
          </h3>
          <h3 className="text-md  font-medium">{areaName} </h3>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
