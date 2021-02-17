import React, { useState } from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Editor from "./Editor";
import Button from "@material-ui/core/Button";
import { Link, Typography } from "@material-ui/core";
import config from "./config";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "10px",
  },
  text: {
    fontFamily: "italic",
    color: "primary",
  },
  top: {
    marginTop: "1%",
  },
}));
const question_from_jango = document.getElementById("app").dataset
  .question_from_jango;
const question_id_from_jango = document.getElementById("app").dataset
  .question_id_from_jango;
console.log("qid ", question_id_from_jango);
function App() {
  const classes = useStyles();
  const [answer_text, setanswer_text] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const Login_url = config.BaseUrl + "/login";
  const handleSubmitAnswer = (e) => {
    let Submit_answer_url = config.BaseUrl;
    Submit_answer_url =
      Submit_answer_url + "/write_answer" + "/" + question_id_from_jango;
    let data = {
      question_id: question_id_from_jango,
      answer_text: answer_text,
    };
    console.log(data);

    axios
      .post(Submit_answer_url, data)
      .then((res) => {
        console.log(res.data);
        if (res.data === "AnsAdded") {
          console.log("in ans_added");
          window.location = config.BaseUrl;
        } else if (res.data === "loginRequired") {
          console.log("in @lR");
          setshowAlert(true);
          //window.location = config.BaseUrl;
        }
      })
      .catch((err) => {
        console.log(err, "error while asking question");
        alert(
          " Server side error while answering question !!\n Please try again or contact admin if it continues "
        );
      });
  };
  return (
    <>
      <Typography
        align="center"
        color="textPrimary"
        variant="h6"
        className={classes.top}
      >
        "QUESTION": {question_from_jango}
      </Typography>

      <Typography
        align="center"
        color="primary"
        variant="h6"
        className={classes.top}
      >
        Write your answer here
      </Typography>

      <Editor value={answer_text} setValue={setanswer_text}></Editor>
      <div className={classes.center}>
        <Button
          variant="contained"
          color="primary"
          disabled={answer_text.trim() != "" ? false : true}
          onClick={(e) => handleSubmitAnswer(e)}
        >
          Submit answer
        </Button>
      </div>
      {showAlert && (
        <Alert
          severity="error"
          onClose={() => {
            setshowAlert(false);
          }}
        >
          Please login Answer question — <Link href={Login_url}>login</Link>
        </Alert>
      )}
    </>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
