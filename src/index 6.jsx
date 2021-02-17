import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import QuestionInHomePage from "./homepage/QuestionInHomePage";

function App() {
  return (
    <div>
      <QuestionInHomePage />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
