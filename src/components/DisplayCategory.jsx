import React, { useState } from "react";
import CategoryList from "./CategoryList";

const DisplayCategory = (props) => {
  const { data } = props;
  // console.log(data);
  const { title, itemCards } = data;
  const itemList = data.itemCards;
  // console.log(itemList);

  const [shwoItem, setShowItem] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setShowItem(!shwoItem);
  };

  return (
    <div className="mt-8">
      <div className="border-b-1 border-b-gray-300">
        {/* {header} */}
        <div className="flex justify-between">
          <h1
            className="mb-7 text-xl font-bold cursor-pointer"
            onClick={handleClick}
          >
            {title} ({itemCards.length})
          </h1>
          <span className="mr-5">⬇️</span>
        </div>

        {shwoItem &&
          itemList.map((c, index) => (
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
