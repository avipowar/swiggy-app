import React from "react";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";

const Cart = () => {
  const ItemList = useSelector((state) => state.cart.items);

  console.log(ItemList);

  return (
    <div className="text-center m-auto w-6/12">
      <h1 className="font-bold text-xl m-4 p-4">Cart</h1>
      {ItemList.map((c, index) => {
        return (
          <CategoryList
            className={`pb-4 ${
              index !== ItemList.length - 1
                ? "border-b border-gray-300 mt-5 mb-5"
                : ""
            }`}
            key={index}
            data={c} // Pass the individual item, not the whole list
          />
        );
      })}
    </div>
  );
};

export default Cart;
