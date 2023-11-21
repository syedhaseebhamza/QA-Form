import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Button from "../components/Button";

function Layout() {
  const [Question, setAddQuestion] = useState([
    {
      id: Date.now(),
      question: "",
      shortAnswer: "",
      paragraph: "",
      checkBox: "",
    },
  ]);

  const [checkboxData, setCheckboxData] = useState([]);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(!isChecked);
  };

  const btnAddQuestion = () => {
    const addNewQuestion = [...Question];
    addNewQuestion.unshift({ id: Date.now() });
    setAddQuestion(addNewQuestion);
  };

  const removeQuestion = (id) => {
    setAddQuestion((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  };

  const inputFieldDataHandler = (e, id) => {
    const selectedQuestionInputField = Question.findIndex(
      (question) => question.id === id
    );
    const updatedArray = [...Question];
    updatedArray[selectedQuestionInputField].question = e.target.value;
    return updatedArray;
  };
  const shortAnswerHandler = (e, id) => {
    const selectedQuestionIndex = Question.findIndex(
      (question) => question.id === id
    );
    const newArr = [...Question];
    newArr[selectedQuestionIndex].shortAnswer = e.target.value;

    return newArr;
  };

  const paragrapghHandler = (e, id) => {
    const updateData = Question.findIndex((paragraph) => paragraph.id === id);
    const newParagraphArray = [...Question];
    newParagraphArray[updateData].paragraph = e.target.value;
    return newParagraphArray;
  };

  const checkBoxhandler = (event, id) => {
    const updatedDataOfCheckBox = Question.findIndex(
      (checkBox) => checkBox.id === id
    );
    const newArrayforCheckBox = [...Question];
    const newValue = event.target.value;
    if (!isChecked) {
      const updatedCheckboxData = {
        ...checkboxData,
        [id]: newArrayforCheckBox[updatedDataOfCheckBox].checkBox
          ? [...checkboxData[id], newValue]
          : [newValue],
      };
      newArrayforCheckBox[updatedDataOfCheckBox].checkBox = updatedCheckboxData;

      setAddQuestion(newArrayforCheckBox);
      setCheckboxData(updatedCheckboxData);
    }
  };

  const jsonHandlerBtn = () => {
    const data = [Question];
    console.log(data);
  };

  return (
    <div>
      <Navbar heading="New Questionnaire" loginBtn="log in" />
      {Question.map((item, i) => (
        <Main
          shortAnswer={item.shortAnswer}
          shortAnswerHandler={(e) => shortAnswerHandler(e, item.id)}
          paragraph={item.paragraph}
          paragrapghHandler={(e) => paragrapghHandler(e, item.id)}
          checkBox={item.checkBox}
          checkBoxhandler={(e) => checkBoxhandler(e, item.id)}
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          inputData={item.inputData}
          onChangeValue={(e) => inputFieldDataHandler(e, item.id)}
          key={item.id}
          indexx={i}
          showFooter={i > 0}
          onRemoveQuestion={() => removeQuestion(item.id)}
        />
      ))}

      <Button
        className="mt-[24px] ml-[25%] h-[40px] w-[50%]"
        variant="secondary"
        onClick={btnAddQuestion}
        children={"add question"}
      />
      <Button
        className="mt-[24px] ml-[25%] h-[40px] w-[50%]"
        variant="primary"
        onClick={jsonHandlerBtn}
        children={"save & share"}
      />
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
