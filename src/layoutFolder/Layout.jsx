import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Button from "../components/Button";

function Layout() {
  const [Question, setAddQuestion] = useState([{ id: Date.now() }]);

  const [shortAnswer, setShortAnswer] = useState("");

  const [paragraph, setParagraph] = useState("");

  const [checkBox, setCheckBox] = useState({});

  const btnAddQuestion = () => {
    const addNewQuestion = [...Question];
    addNewQuestion.unshift({ id: Date.now() });
    setAddQuestion(addNewQuestion);
  };

  const removeQuestion = (id) => {
    setAddQuestion((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const inputFieldDataHandler = (e, id) => {
    const newAdd = Question.map((item) => {
      if (item.id === id) {
        return { ...item, inputData: e.target.value };
      }
      return item;
    });
    setAddQuestion(newAdd);
  };
  const shortAnswerHandler = (e) => {
    setShortAnswer(e.target.value);
  };

  const paragrapghHandler = (e) => {
    setParagraph(e.target.value);
  };

  const checkBoxhandler = (event, index) => {
    // checkBox.push()
    let newValue = { ...checkBox };

    newValue[`option_${index + 1}`] = event.target.value;

    setCheckBox(newValue);
  };
  const jsonHandlerBtn = () => {
    const data = [[Question], [shortAnswer], [paragraph], [checkBox]];
    // console.log(data);
    // console.log(checkBox);
  };

  return (
    <div>
      <Navbar heading="New Questionnaire" loginBtn="log in" />
      {Question.map((item, i) => (
        <Main
          shortAnswer={shortAnswer}
          shortAnswerHandler={shortAnswerHandler}
          paragraph={paragraph}
          paragrapghHandler={paragrapghHandler}
          checkBox={checkBox}
          checkBoxhandler={checkBoxhandler}
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

// const filteredQuestion = Question.filter((q) => q.inputData.trim() !== "");

//     const questionData = filteredQuestion.map(({ id, inputData }) => ({
//       id,
//       inputData,
//     }));

//     const combinedData = {
//       Question: questionData.length > 0 ? questionData : undefined,
//       paragraph: paragraph.trim() !== "" ? paragraph : undefined,
//       checkBox: checkBox.trim() !== "" ? checkBox : undefined,
//       shortAnswer: shortAnswer.trim() !== "" ? shortAnswer : undefined,
//     };

//     const filteredCombinedData = Object.fromEntries(
//       Object.entries(combinedData).filter(([_, value]) => value !== undefined)
//     );

//     console.log(JSON.stringify(filteredCombinedData));
