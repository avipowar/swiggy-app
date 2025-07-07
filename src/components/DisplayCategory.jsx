import React from "react";
import CategoryList from "./CategoryList";

const DisplayCategory = (props) => {
  const { data } = props;
  // console.log(data);
  const { title, itemCards } = data;
  const itemList = data.itemCards;
  // console.log(itemList);
  return (
    <div className="mt-8">
      <div>
        {/* {header} */}
        <h1 className="mb-7 text-xl font-bold">
          {title} ({itemCards.length})
        </h1>
        {itemList.map((c, index) => (
          <CategoryList
            className={`pb-4 ${
              index !== itemList.length - 1
                ? "border-b border-gray-300 mt-5 mb-5"
                : ""
            }`}
            key={index}
            data={c}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCategory;
