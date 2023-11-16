import React, { useState } from "react";

function Test() {
  const [add, setAdd] = useState([{ id: Date.now(), inputData: "" }]);
  const [pickerDropdownState, setPickerDropdownState] = useState([
    { id: Date.now(), inputData2: "" },
  ]);

  const btnPress = () => {
    const newAdd = [...add, { id: Date.now(), inputData: add[0].inputData }];
    newAdd[0].inputData = "";
    const newAdd2 = [
      ...pickerDropdownState,
      { id: Date.now(), inputData2: pickerDropdownState[0].inputData2 },
    ];
    newAdd2[0].inputData2 = "";

    setAdd(newAdd);
    setPickerDropdownState(newAdd2);
  };

  const btnChangeInput = (e, id) => {
    const newAdd = add.map((item) => {
      if (item.id === id) {
        return { ...item, inputData: e.target.value };
      }
      return item;
    });
    setAdd(newAdd);
  };
  const btnChangeInput2 = (e, id) => {
    const newAdd2 = pickerDropdownState.map((item) => {
      if (item.id === id) {
        return { ...item, inputData2: e.target.value };
      }
      return item;
    });
    setPickerDropdownState(newAdd2);
  };

  return (
    <div className="flex justify-around flex-col gap-4">
      <button onClick={btnPress}>add</button>
      {add.map((item) => (
        <input
          onChange={(e) => btnChangeInput(e, item.id)}
          key={item.id}
          className="border border-gray-700"
          type="text"
          value={item.inputData}
        />
      ))}
    </div>
  );
}

export default Test;
