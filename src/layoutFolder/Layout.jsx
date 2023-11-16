import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Button from "../components/Button";

function Layout() {
  const [addQuestion, setAddQuestion] = useState([
    { id: Date.now(), inputData: "" },
  ]);
  const [inputData, setInputData] = useState("");
  // const [clickCount, setClickCount] = useState(1);

  const btnAddQuestion = () => {
    const addNewQuestion = [...addQuestion];
    addNewQuestion.unshift({ id: Date.now(), inputData: "" });
    // const addNewQuestion = [
    //   ...addQuestion,
    //   { id: Date.now(), inputData: addQuestion[0].inputData },
    // ];
    // addNewQuestion[0].inputData = "";

    // addNewQuestion.unshift({ id: Date.now() });
    // if (clickCount === 1) {
    //   addNewQuestion.unshift({ id: Date.now() });
    // } else {
    //   addNewQuestion.push({ id: Date.now() });
    //   addNewQuestion.reverse({ id: Date.now() });
    // }
    setAddQuestion(addNewQuestion);
    // setClickCount((prevCount) => prevCount + 1);
  };

  const removeQuestion = (id) => {
    setAddQuestion((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const inputFieldDataHandler = (e, id) => {
    const newAdd = addQuestion.map((item) => {
      if (item.id === id) {
        return { ...item, inputData: e.target.value };
      }
      return item;
    });
    setAddQuestion(newAdd);
  };

  const jsonHandlerBtn = () => {
    const inputDataArray = addQuestion
      .slice(1)
      .map((question) => question.inputData);

    const jsonData = JSON.stringify(inputDataArray);

    console.log(jsonData);
  };

  return (
    <div>
      <Navbar heading="New Questionnaire" loginBtn="log in" />
      {addQuestion.map((item, i) => (
        <Main
          inputData={item.inputData}
          key={item.id}
          indexx={i}
          showFooter={i > 0}
          onChangeValue={(e) => inputFieldDataHandler(e, item.id)}
          onRemoveQuestion={() => removeQuestion(item.id)}
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
        onClick={jsonHandlerBtn}
      >
        save & share
      </Button>
    </div>
  );
}

export default Layout;
