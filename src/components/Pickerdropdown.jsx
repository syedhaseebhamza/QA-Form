import React, { useState } from "react";

import Dynamicinput from "./Dynamicinput";
import Checkboxinput from "./Checkboxinput";
import Radioboxinput from "./Radioboxinput";

function Pickerdropdown() {
  const [selectedOption, setSelectedOption] = useState("Short Answer");

  const handleButtonClick = () => {
    // if (selectedOption !== "select one option") {
    // }
    setSelectedOption("select one option");
  };

  const handleOptionSelect = (componentName) => {
    setSelectedOption(componentName);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="text-black border border-gray-400 font-medium rounded text-sm px-5 py-2.5 flex space-x-24 justify-between"
      >
        <span className="mr-2">
          {selectedOption ? selectedOption : "selected "}
        </span>
        <span>
          <img className="h-4 w-4" src="/down-arrow.svg" alt="" />
        </span>
      </button>

      <div className="pt-[17px]">
        {selectedOption === "select one option" ? (
          <ul>
            <li onClick={() => handleOptionSelect("Short Answer")}>
              Short Answer
            </li>
            <li onClick={() => handleOptionSelect("Paragraph")}>Paragraph</li>
            <li onClick={() => handleOptionSelect("Checkbox")}>Check box</li>
            <li onClick={() => handleOptionSelect("Multiple Choice")}>
              Multiple Choice
            </li>
          </ul>
        ) : (
          <div>
            {selectedOption === "Short Answer" && (
              <Dynamicinput type="inputField" placeholder="Short Answer" />
            )}
            {selectedOption === "Paragraph" && (
              <Dynamicinput
                type="inputField"
                placeholder="Long answer text"
                padding="1.5rem"
              />
            )}
            {selectedOption === "Checkbox" && <Checkboxinput />}
            {selectedOption === "Multiple Choice" && <Radioboxinput />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pickerdropdown;
