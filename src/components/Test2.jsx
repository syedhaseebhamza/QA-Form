import React, { useState } from "react";

function Test2() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    const inputData = {
      text: inputText
    };
    console.log(JSON.stringify(inputData));
  };

  return (
    <div className="flex justify-around">
      <button onClick={handleButtonClick}>Click</button>
      <input
        className="border rounded"
        type="text"
        value={inputText}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Test2;
