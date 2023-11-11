import React, { useState } from "react";

import Dynamicinput from "./Dynamicinput";

function Pickerdropdown() {
  const [selectedOption, setSelectedOption] = useState("Short Answer");

  const handleButtonClick = () => {
    if (selectedOption !== "select") {
      setSelectedOption("select");
    }
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
        {selectedOption === "select" ? (
          <ul>
            <li onClick={() => handleOptionSelect("Short Answer")}>
              Short Answer
            </li>
            <li onClick={() => handleOptionSelect("Paragrapgh")}>Paragrapgh</li>
          </ul>
        ) : (
          <div>
            {selectedOption === "Short Answer" && (
              <Dynamicinput placeholder={"Short Answer"} />
            )}
            {selectedOption === "Paragrapgh" && (
              <Dynamicinput placeholder={"Long answer text"} height="5rem" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pickerdropdown;
