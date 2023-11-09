import React from "react";

function Navbar({ heading, loginBtn }) {
  return (
    <div>
      <header className="bg-primary h-[60px]">
        <div className="flex justify-between items-center py-0 px-4 h-[58px] ">
          <div className="bg-primary h-[48px] w-[48px] inline-flex justify-center items-center flex-shrink-0 shadow shadow-red-800">
            <img className="" src="/MasterEmblemNoBox.svg" alt="noImage" />
          </div>
          <h1 className="text-slate-100 capitalize text-lg font-medium not-italic font-sans	">
            {heading}
          </h1>
          <div className="inline-flex justify-center items-center flex-shrink-0 gap-[10px] p-[8px] bg-gray-100 bg-opacity-20 h-[30px]">
            <button className="text-slate-50 uppercase text-center  leading-3 font-medium text-lg not-italic ">
              {loginBtn}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
