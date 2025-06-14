import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header flex shadow-md px-5">
      <div className="app-logo mr-auto">
        <img src={LOGO_URL} alt="app-logo" className="w-20" />
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
