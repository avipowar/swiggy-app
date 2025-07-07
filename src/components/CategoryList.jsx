import React from "react";
import ItemList from "./ItemList";
import { ORDER_URL } from "../utils/constants";

const CategoryList = ({ data, className }) => {
  // console.log(data);
  const { subTitle, title } = data.card.info;
  const { name, defaultPrice, description, imageId } = data?.card?.info;
  return (
    <div className="border-b-1 border-b-gray-300    w-full">
      <div className="flex  justify-between my-4">
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
        <div className="w-3/12 h- ml-50 ">
          <img
            className="rounded-lg "
            src={ORDER_URL + imageId}
            alt="order-img"
          />
          <div className="mt-1">
            <button className="px-10 py-2 bg-white text-green-500 font-semibold border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 ml-6 ">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
