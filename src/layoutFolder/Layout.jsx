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
        marginTop="10px"
        marginLeft="25%"
        height="40px"
        width="50%"
        variant="secondary"
      >
        log in{" "}
      </Button>
      <Button
        marginTop="10px"
        marginLeft="25%"
        height="40px"
        width="50%"
        variant="primary"
      >
        log out
      </Button>
    </div>
  );
}

export default Layout;
