import React from "react";
import Button from "./Button";

function Navbar({ heading }) {
  const loginbtn = "log in"
  return (
    <div>
      <header className="bg-red-700 h-[60px]">
        <div className="flex justify-between items-center py-0 px-4 h-[58px] ">
          <div className="bg-red-700 h-[48px] w-[48px] inline-flex justify-center items-center flex-shrink-0 shadow shadow-red-800">
            <img className="" src="/MasterEmblemNoBox.svg" alt="noImage" />
          </div>
          <h1 className="text-slate-100 capitalize text-lg font-medium not-italic font-sans	">
            {heading}
          </h1>
          <Button loginbtn={loginbtn}/>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
