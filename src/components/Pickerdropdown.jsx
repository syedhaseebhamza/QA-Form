import React, { useState, useRef, useEffect } from "react";
import Dynamicinput from "./Dynamicinput";
import Checkboxinput from "./Checkboxinput";
import Radioboxinput from "./Radioboxinput";

function Pickerdropdown() {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Short Answer");

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
        className="text-black border border-gray-400 font-medium rounded text-sm px-5 py-2.5 ml-4 flex space-x-24 justify-between"
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
              onClick={() => handleOptionSelect("Short Answer")}
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
              onClick={() => handleOptionSelect("Multiple Choice")}
            >
              Multiple Choice
            </li>
          </ul>
        )}

        {selectedOption === "Short Answer" && !isDropdownOpen && (
          <Dynamicinput  type="inputField" placeholder="Short Answer" />
        )}
        {selectedOption === "Paragraph" && !isDropdownOpen && (
          <Dynamicinput
            type="inputField"
            placeholder="Long answer text"
            padding="1.5rem"
          />
        )}
        {selectedOption === "Checkbox" && !isDropdownOpen && <Checkboxinput />}
        {selectedOption === "Multiple Choice" && !isDropdownOpen && (
          <Radioboxinput />
        )}
      </div>
    </div>
  );
}

export default Pickerdropdown;
