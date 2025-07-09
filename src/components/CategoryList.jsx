import React from "react";
import ItemList from "./ItemList";
import { ORDER_URL } from "../utils/constants";

const CategoryList = ({ data, className }) => {
  // console.log(data.card.info.offerTags[0]);
  // const { subTitle, title } = data.card.info.offerTags[0];
  const { name, price, defaultPrice, description, imageId } = data?.card?.info;
  return (
    <div className="border-b-1 flex justify-between border-b-gray-300 w-full mb-3 mt-3">
      {/* <div className="flex w-8/12   my-4"> */}
      <div className="w-9/12 mb-5 px-10">
        <h1 className="text-xl font-medium">{name}</h1>
        <h1 className="font-bold text-lg">
          ₹{(defaultPrice ?? price) / 100}{" "}
          <span className="text-gray-500 text-sm">
            {/* 🏷️ {title + " " + subTitle} */}
          </span>
        </h1>
        <p className="text-base text-gray-500 mt-3 line-clamp-2">
          {description}
        </p>
      </div>
      <div className="w-3/12 mb-5">
        <div className="relative">
          <img
            className="rounded-lg w-1xl h-44 "
            src={ORDER_URL + imageId}
            alt="order-img"
          />
          <button className="absolute bottom-2 ml-8  px-10 py-2 bg-white text-green-500 font-semibold border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 ">
            Add
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CategoryList;
