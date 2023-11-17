import React, { useState } from "react";
import Dynamicinput from "./Dynamicinput";
import Pickerdropdown from "./Pickerdropdown";
import Stepper from "./Stepper";

function Main({
  onChangeValue,
  indexx,
  showFooter,
  onRemoveQuestion,
  inputData,

  shortAnswerHandler,
  shortAnswer,
  paragrapghHandler,
  paragraph,
  checkBoxhandler,
  checkBox,
}) {
  const [remove, setRemove] = useState(false);

  const removeHandler = () => {
    setRemove(true);
    onRemoveQuestion();
  };
  if (remove) {
    return null;
  }

  return (
    <div className="  w-[50%] mx-auto bg-slate-50 mt-28 pb-5">
      <h1 className="pl-[18px] pt-[2rem] capitalize leading-3 decoration-1 tracking-wide ">
        Question
      </h1>
      <div className="pl-[18px] pt-[15px]">
        <Dynamicinput
          type="inputField"
          placeholder="What do you want to ask ? "
          onChange={onChangeValue}
          value={inputData}
        />
      </div>
      <div>
        <h1 className="capitalize leading-3 decoration-1 tracking-wide  pl-[18px] mt-[3rem]">
          Answer
        </h1>
      </div>

      <div className="pt-6 ">
        <Pickerdropdown    shortAnswer={shortAnswer}  shortAnswerHandler={shortAnswerHandler} paragraph={paragraph}  paragrapghHandler={paragrapghHandler}  checkBox={checkBox} checkBoxhandler={checkBoxhandler} />
      </div>

      {showFooter && (
        <footer className="flex justify-between it h-[2.5rem] mt-8 py-0 px-4 border border-gray-200  border-t-1 border-l-0 border-r-0 border-b-0 items-center ">
          <h1>{`${indexx} of ${indexx}`} </h1>
          <Stepper onRemove={removeHandler} />
        </footer>
      )}
    </div>
  );
}

export default Main;
