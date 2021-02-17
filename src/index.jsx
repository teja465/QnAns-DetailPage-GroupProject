import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Answer from "./Answer";
import { makeStyles } from "@material-ui/core/styles";
import QuestionDetail from "./qna/QuestionDetail";
import { firestore } from "./qna/firebaseConfig";
import AnswerComp from "./qna/AnswerComp";
import classes from "*.module.css";
import Loading from "./qna/Loading";
let qid = document.getElementById("app").dataset.qid;
qid="2Txf2YjSLNKGnYr0QPAn"
const useStyles = makeStyles((theme) => ({
  answers_background: {
    //maxWidth: 345,
    paddingLeft: "8%",
    marginTop: "20px",
  },
  total_background: {
    backgroundColor: "white",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  page: {
    backgroundColor: "lightGray",
  },
}));

function App() {
  const classes = useStyles();
  const [question, setquestion] = useState(false);
  const [answers_list, setanswers_list] = useState([]);

  useEffect(() => {
    firestore
      .collection("questions_collection")
      .doc(qid)
      .get()
      .then((doc) => {
        setquestion(doc.data());
        // console.log(doc.data());
      })
      .catch((err) => {
        // console.log(err, "while getting qn from fs");
      });
  }, []);
  //-----------------------
  useEffect(() => {
    firestore
      .collection("questions_collection")
      .doc(qid)
      .collection("answersSubCollection")
      .get()
      .then((snapshot) => {
        let ansList = [];
        snapshot.docs.forEach((item) => {
          //console.log(item.data(), "1 ans--");
          let t = item.data();
          t["id"] = item.id;
          ansList.push(t);
          // console.log(t);
        });
        // console.log(ansList);
        setanswers_list(ansList);
      });
  }, []);
  // console.log({ question }, "question <--", answers_list, qid);

  return (
    <div className={classes.page}>
      <div className={classes.total_background}>
        {question == false ? (
          <>
            <Loading />{" "}
          </>
        ) : (
          ""
        )}
        {question && <QuestionDetail question={question} />}
        <div className={classes.answers_background}>
          {answers_list.length != 0 &&
            answers_list.map((ans) => <AnswerComp key={ans.id} answer={ans} />)}
          {answers_list.length === 0 && <h3 style={{color:"red"}}>No answers yet</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
