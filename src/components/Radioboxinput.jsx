import React, { useState } from "react";
import Dynamicinput from "./Dynamicinput";

function Radioboxinput() {
  const [addOption, setAddOption] = useState([{ id: Date.now() }]);

  const btnAddOption = () => {
    const newOption = [...addOption];
    newOption.push({ id: Date.now() });
    setAddOption(newOption);
  };
  const removeOption = (index) => {
    const filterInput = addOption.filter((input) => input.id !== index);
    setAddOption(filterInput);
  };

  return (
    <>
      {addOption.map((input, index) => (
        <div className="flex     items-center pb-2   " key={input.id}>
          <Dynamicinput className="ml-2 " type="radio" />
          <Dynamicinput
            className="w-[34rem] ml-3"
            type="inputField"
            placeholder={`Option # ${index + 1}`}
          />
          <button
            onClick={() => removeOption(input.id)}
            className="inline-block w-[24px] ml-[2%] "
          >
            <span>
              <img src="/cross.svg" alt="" />
            </span>
          </button>
        </div>
      ))}
      <button
        onClick={btnAddOption}
        className="py-2 px-12 inline-flex items-center mt-4 rounded border border-solid text-primary border-gray-400  text-sm font-font-normal uppercase ml-[13rem]"
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
