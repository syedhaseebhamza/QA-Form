import "./App.css";
// import Btn from "./components/Btn";
import Main from "./components/Main";

import Navbar from "./components/Navbar";

function App() {
  const heading = "New Questionnaire";
  // const handelClick = () => {
  //   console.log("first btn");
  // };

  return (
    <div className="h-[100vh] bg-secondary">
      <Navbar heading={heading} />
      <Main />
      {/* <Btn onClick={handelClick} className="bg-green-600">
        3
      </Btn>
      <Btn label="log in " onClick={handelClick} className="bg-yellow-600" />
      <Btn label={3} onClick={handelClick} className="bg-red-400" /> */}
    </div>
  );
}

export default App;
