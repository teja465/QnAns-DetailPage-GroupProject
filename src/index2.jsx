import React from "react";
import ReactDOM from "react-dom";
import Answer from "./Answer";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5%",
  },
}));

const qid = document.getElementById("app").dataset.qid;
function App() {
    
  const classes = useStyles();

  return (
    <>
     {/* pass question_id={qid} as prop to question */}
      <Answer  />  
  <Typography>Answers of this question{qid}</Typography>

      <div className={classes.root}>
        <Answer />
        <Answer />
        <Answer />
      </div>
    </>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
