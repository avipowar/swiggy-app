import React from "react";
import CategoryList from "./CategoryList";

const DisplayCategory = ({ data }) => {
  //   console.log(data);

  const categoryList = data?.categories;
  //   console.log(categoryList);

  return (
    <div className="mt-8">
      <div>
        {/* {header} */}
        <h1 className="mb-7 text-xl font-bold">{data.title}</h1>
        {categoryList.map((c, index) => (
          <CategoryList
            className={`pb-4 ${
              index !== categoryList.length - 1
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
