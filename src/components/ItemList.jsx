import React from "react";
import { ORDER_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log(data?.info);
  const { subTitle, title } = data?.info?.offerTags[0];
  const { name, defaultPrice, description, imageId } = data?.info;
  return (
    <div className="border-b-1 border-b-gray-300">
      <div className="flex w-full  justify-between my-15 ">
        <div className="w-9/12 ">
          <h1 className="text-xl font-medium">{name}</h1>
          <h1 className="font-bold text-lg">
            ₹{defaultPrice / 100}{" "}
            <span className="text-gray-500 text-sm">
              🏷️ {title + " " + subTitle}
            </span>
          </h1>
          <p className="text-base text-gray-500 mt-3">{description}</p>
        </div>
        <div className="w-3/12 ml-50">
          <img
            className="w-45 rounded-lg"
            src={ORDER_URL + imageId}
            alt="order-img"
          />
          <div>
            <button className="px-10 py-2 bg-white text-green-500 font-semibold border border-gray-300 rounded hover:bg-gray-100">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
