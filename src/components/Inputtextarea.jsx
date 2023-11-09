import React from "react";
// import Text from "./Text";

function Inputtextarea({ questionLabel, questionPlaceholder , margin }) {
  //   const [selectedOption, setselectedOption] = useState(""); // for test

  //   const handleSelectChange = (e) => {
  //     setselectedOption(e.target.value); // only for test
  //   };
  return (
    <div className="pl-[20px] pt-[2%]">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {questionLabel}
      </label>
      <input
        type="text"
        id="first_name"
        className="h-12 py-2 px-3 border rounded text-gray-700 leading-tight focus:outline-none w-[95%] "
        placeholder={questionPlaceholder}
        required
        
      />

      {/* <select
        name="frindname"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="ha">haseeb</option>
        <option value="ham">hamza</option>
        <option value="has">hashmi</option>
        <option value="Text">Text</option>
      </select>
      {selectedOption === "Text" && <Text />} */}
      {/* just for testing  */}
    </div>
  );
}

export default Inputtextarea;
