import React from "react";
import ItemList from "./ItemList";

const CategoryList = ({ data, className }) => {
  // console.log(data.itemCards);
  const itemList = data?.itemCards;
  //   header
  return (
    <div className={className}>
      <div className="flex justify-between mb-2 mt-2">
        <h1 className="font-bold text-base">
          {data.title} ({data.itemCards.length})
        </h1>
        <span>⬇️</span>
      </div>
      {/* body */}
      <div>
        {itemList.map((item, index) => (
          <ItemList key={index} data={item?.card} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
