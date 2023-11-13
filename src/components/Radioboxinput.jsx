import React, { useState } from "react";
import Dynamicinput from "./Dynamicinput";

function Radioboxinput() {
  const [addOption, setAddOption] = useState(["addOption"]);

  const btnAddOption = () => {
    setAddOption((prevItem) => [...prevItem, {}]);
  };
  const btnRemoveAction = (index) => {
    setAddOption((prevItem) => prevItem.filter((_, i) => i !== index));
  };
  return (
    <>
      {addOption.map((_, i) => (
        <div className="flex items-center space-x-2 py-2  " key={i}>
          <Dynamicinput type="radio" />
          <Dynamicinput type="inputField" placeholder={`Option # ${i + 1}`} />
          <button
            onClick={() => btnRemoveAction(i)}
            className="inline-block w-[24px]"
          >
            <span>
              <img src="/cross.svg" alt="" />
            </span>
          </button>
        </div>
      ))}
      <button
        onClick={btnAddOption}
        className="py-2 px-12 inline-flex items-center mt-4 rounded border border-solid text-primary border-gray-400  text-sm font-font-normal uppercase"
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

export default Radioboxinput;
