import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Button from "../components/Button";
function Layout() {
  const [addQuestion, setAddQuestion] = useState([{ id: Date.now() }]);
  const [inputData, setInputData] = useState("");

  const btnAddQuestion = () => {
    const addNewQuestion = [...addQuestion];
    addNewQuestion.unshift({ id: Date.now() });
    setAddQuestion(addNewQuestion);
  };
  const btnAddJson = () => {
    console.log(JSON.stringify(inputData, null, 2));
  };
  const inputFieldDataHandler = (e) => {
    setInputData(e.target.value);
  };
  return (
    <div>
      <Navbar heading="New Questionnaire" loginBtn="log in" />
      {addQuestion.map((id, i) => (
        <Main
          key={id.id}
          indexx={i}
          showFooter={i > 0}
          onChangeValue={inputFieldDataHandler}
        />
      ))}

      <Button
        className="mt-[24px] ml-[25%] h-[40px] w-[50%]"
        variant="secondary"
        onClick={btnAddQuestion}
      >
        add question{" "}
      </Button>
      <Button
        className="mt-[24px] ml-[25%] h-[40px] w-[50%]"
        variant="primary"
        onClick={btnAddJson}
      >
        save & share
      </Button>
    </div>
  );
}

export default Layout;
