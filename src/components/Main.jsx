import React from "react";
import Dynamicinput from "./Dynamicinput";

function Main() {
  return (
    <div className="  w-[50%] mx-auto bg-slate-50 mt-16">
      <h1 className="pl-[18px] pt-[15px] capitalize leading-3 decoration-1 tracking-wide ">
        Question
      </h1>
      <div className="pl-[18px] pt-[15px]">
        <Dynamicinput placeholder="What do you want to ask ? " />
      </div>
      <h1 className="capitalize leading-3 decoration-1 tracking-wide  pl-[18px] pt-[15px]">
        Answer
      </h1>
    </div>
  );
}

export default Main;
