import CategoryList from "./CategoryList";
import React from "react";

const DisplayCategory = ({ data, showItem, setShowIndex }) => {
  const { title, itemCards } = data;
  const itemList = data.itemCards;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mt-8">
      <div className="border-b-1 border-b-gray-300">
        {/* {header} */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="mb-7 text-xl font-bold ">
            {title} ({itemCards.length})
          </h1>
          <span className="mr-5">⬇️</span>
        </div>

        {showItem &&
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
