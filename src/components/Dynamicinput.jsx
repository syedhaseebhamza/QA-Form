import React from "react";
import { tv } from "tailwind-variants";

const inputStyle = tv({
  base: "bg-gray-50 border border-gray-300  p-2.5 placeholder-gray-400 text-gray-700 text-sm w-[97%] focus:border-gray-500 focus:ring-gray-500 ",
  variants: {
    type: {
      inputField: "text",
      checkBox: "checkbox",
      radio: "radio",
    },
  },
});

function Dynamicinput({ placeholder, value, onChange, padding, type  }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={inputStyle({ type })}
        style={{ padding: padding }}
      />
    </div>
  );
}

export default Dynamicinput;
