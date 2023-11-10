import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Button from "../components/Button";
function Layout() {
  return (
    <div>
      <Navbar heading="New Questionnaire" loginBtn="log in" />
      <Main />
      <Button
        marginTop="24px"
        marginLeft="25%"
        height="40px"
        width="50%"
        variant="secondary"
      >
        add question{" "}
      </Button>
      <Button
        marginTop="24px"
        marginLeft="25%"
        height="40px"
        width="50%"
        variant="primary"
      >
        save & share
      </Button>
    </div>
  );
}

export default Layout;
