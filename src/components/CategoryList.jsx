import React from "react";

const CategoryList = ({ data, className }) => {
  console.log(data);
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
        <h1>ainsh</h1>
      </div>
    </div>
  );
};

export default CategoryList;
