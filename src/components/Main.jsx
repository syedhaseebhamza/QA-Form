import React from "react";
import Inputtextarea from "./Inputtextarea";
import Selector from "./Selector";

function Main() {
  return (
    <div className=" w-[50%] mx-auto bg-slate-50 mt-8">
      <Inputtextarea
        questionLabel="Question"
        questionPlaceholder="What do you want to ask ?"
      />
      <div className="pt-[70px] pl-[30px]">
        <Selector />
      </div>
    </div>
  );
}

export default Main;
