import React from "react";
import Dynamicinput from "./Dynamicinput";
import Pickerdropdown from "./Pickerdropdown";

function Main() {
  return (
    <div className="  w-[50%] mx-auto bg-slate-50 mt-10">
      <h1 className="pl-[18px] pt-[2rem] capitalize leading-3 decoration-1 tracking-wide ">
        Question
      </h1>
      <div className="pl-[18px] pt-[15px]">
        <Dynamicinput placeholder="What do you want to ask ? " />
      </div>
      <div>
        <h1 className="capitalize leading-3 decoration-1 tracking-wide  pl-[18px] mt-[3rem]">
          Answer
        </h1>
      </div>

      <div className="pt-6 pl-6">
        <Pickerdropdown />
      </div>
      <footer className="flex justify-between pt-20">
        <h1>left side for test </h1>
        <h2>right side for test </h2>
      </footer>
    </div>
  );
}

export default Main;
