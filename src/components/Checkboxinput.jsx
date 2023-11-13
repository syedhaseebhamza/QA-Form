import React, { useState } from "react";
import Dynamicinput from "./Dynamicinput";

function Checkboxinput() {
  const [addOption, setAddOption] = useState(["addOption"]);

  const btnClickAddOption = () => {
    setAddOption((prevlist) => [...prevlist, {}]);
  };
  const btnRemoveField = (index) => {
    setAddOption((prevList) => prevList.filter((_, i) => i !== index));
  };
  return (
    <>
      {addOption.map((_, index) => (
        <div className=" flex  items-center space-x-2 py-2" key={index}>
          <Dynamicinput type="checkbox" />
          <Dynamicinput
            placeholder={`Option # ${index + 1}`}
            type="inputField"
          />
          <button
            onClick={() => btnRemoveField(index)}
            className="inline-block w-[24px]"
          >
            <span>
              <img src="/cross.svg" alt="" />
            </span>
          </button>
        </div>
      ))}
      <button
        onClick={btnClickAddOption}
        className=" uppercase text-primary  py-2 px-12 inline-flex items-center mt-4 rounded border border-solid border-gray-400  text-sm font-font-normal"
      >
        <span className="inline-block w-[24px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span>add option</span>
      </button>
    </>
  );
}

export default Checkboxinput;
