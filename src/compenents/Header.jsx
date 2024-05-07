import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="w-full bg-purple-400 mx-auto flex justify-between">
      <div className="flex items-center pl-10">
        <img src={logo} alt="" className="w-20 h-20" />
        <h1 className="text-rose-500 font-serif font-extrabold text-4xl">
          Ashraf
        </h1>
      </div>
    </div>
  );
}

export default Header;
