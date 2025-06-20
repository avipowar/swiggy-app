import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

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
          <li>
            <button
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-1 px-4 rounded-lg shadow-md transition duration-300 ease-in-out cursor-pointer"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
