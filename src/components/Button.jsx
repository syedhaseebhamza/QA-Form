import React from "react";

function Button({ loginbtn }) {
  return (
    <div className="inline-flex justify-center items-center flex-shrink-0 gap-[10px] p-[8px] bg-gray-100 bg-opacity-20 h-[30px]">
      <button className="text-slate-50 uppercase text-center  leading-3 font-medium text-lg not-italic ">
        {loginbtn}
      </button>
    </div>
  );
}

export default Button;
