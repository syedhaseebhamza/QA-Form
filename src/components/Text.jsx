import React from "react";

function Text() {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        label
      </label>
      <input
        type="text"
        id="first_name"
        className="h-12 py-2 px-3 border rounded text-gray-700 leading-tight focus:outline-none "
        placeholder="label"
        required
      />
    </div>
  );
}

export default Text;
