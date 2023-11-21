import React, { useState, useRef, useEffect } from "react";
import Dynamicinput from "./Dynamicinput";
import Checkboxinput from "./Checkboxinput";
import Radioboxinput from "./Radioboxinput";

function Pickerdropdown({
  shortAnswer,
  shortAnswerHandler,
  paragraph,
  paragrapghHandler,
  checkBox,
  checkBoxhandler,
  isChecked,
  handleCheckboxChange
}) {
  console.log(shortAnswer);
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("shortAnswer");

  const handleButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (componentName) => {
    setSelectedOption(componentName);
    setDropdownOpen(false);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
        className="text-black border border-gray-400 font-medium rounded text-sm px-5 py-2.5 ml-4 flex space-x-24 justify-between items-center"
      >
        <span className="mr-2">{selectedOption ? selectedOption : ""}</span>
        <span>
          <img className="h-4 w-4" src="/down-arrow.svg" alt="" />
        </span>
      </button>

      <div className="pt-[17px]">
        {isDropdownOpen && (
          <ul className="flex  flex-col items-center gap-[12px]">
            <li
              className={`bg-slate-200 border border-gray-400 rounded w-[95%] text-center p-[4px]`}
              onClick={() => handleOptionSelect("shortAnswer")}
            >
              Short Answer
            </li>
            <li
              className={`bg-slate-200  border border-gray-400 rounded w-[95%] text-center p-[4px]`}
              onClick={() => handleOptionSelect("Paragraph")}
            >
              Paragraph
            </li>
            <li
              className={`bg-slate-200  border border-gray-400 rounded w-[95%] text-center p-[4px]`}
              onClick={() => handleOptionSelect("Checkbox")}
            >
              Check box
            </li>
            <li
              className={`bg-slate-200  border border-gray-400 rounded w-[95%] text-center p-[4px]`}
              onClick={() => {
                handleOptionSelect("Multiple Choice");
              }}
            >
              Multiple Choice
            </li>
          </ul>
        )}

        {selectedOption === "shortAnswer" && !isDropdownOpen && (
          <Dynamicinput
            type="inputField"
            placeholder="shortAnswer"
            className="ml-[10px] "
            value={shortAnswer}
            onChange={shortAnswerHandler}
          />
        )}
        {selectedOption === "Paragraph" && !isDropdownOpen && (
          <Dynamicinput
            type="inputField"
            placeholder="Long answer text"
            className="ml-[10px] p-[1.5rem]"
            value={paragraph}
            onChange={paragrapghHandler}
          />
        )}
        {selectedOption === "Checkbox" && !isDropdownOpen && (
          <Checkboxinput
            checkBox={checkBox}
            checkBoxhandler={checkBoxhandler}
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {selectedOption === "Multiple Choice" && !isDropdownOpen && (
          <Radioboxinput />
        )}
      </div>
    </div>
  );
}

export default Pickerdropdown;
