import React, { useState } from "react";
import Test from "./Test";
import Testfile from "./Testfile";
function Selector() {
  const [selector, setSelector] = useState("");
  const handelOnChange = (event) => {
    setSelector(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <div>
        <label htmlFor="">Answer</label>
      </div>
      <select
        className="bg-gray-50 w-[40%] dark:placeholder-gray-400 p-2.5 border border-gray-300"
        name="question"
        id=""
        onChange={handelOnChange}
        value={selector}
      >
        <option value="random">select the option </option>
        <option value="shortanswer">Short Answer</option>
        <option value="paragrapgh">Paragraph</option>
        <option value="multipal">Multipal Question</option>
      </select>
      {selector === "shortanswer" && <Test />}
      {selector === "paragrapgh" && <Testfile />}
    </div>
  );
}

export default Selector;
