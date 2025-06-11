import React from "react";

const Header = () => {
  return (
    <div className="header flex shadow-md px-5">
      <div className="app-logo mr-auto">
        <img
          src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png"
          alt="app-logo"
          className="w-20"
        />
      </div>
      <div className="my-7">
        <ul className="flex text-lg font-medium text-grey-400">
          <li className="mr-7">Home</li>
          <li className="mr-7">About Us</li>
          <li className="mr-7">Contact Us</li>
          <li className="mr-7">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
