import React from "react";
import { tv } from "tailwind-variants";

const inputStyle = tv({
  base: "bg-gray-50 border border-gray-300  p-2.5 placeholder-gray-400 text-gray-700 text-sm w-[90%] ",
});

function Dynamicinput({ placeholder, value, onChange, height }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={inputStyle({})}
        style={{ height: height }}
      />
    </div>
  );
}

export default Dynamicinput;
