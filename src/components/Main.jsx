import React from "react";
import Inputtextarea from "./Inputtextarea";

function Main() {
  const questionLabel = "Question";
  const questionPlaceholder = "What do you want to ask ?"
  return (
    <div className="h-[50%] w-[50%] mx-auto bg-slate-50 mt-8">
      <Inputtextarea questionLabel={questionLabel} questionPlaceholder={questionPlaceholder} />
    </div>
  );
}

export default Main;
