import React, { useState } from "react";
import ReactDOM from "react-dom";
import Editor from "./Editor";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import MDEditor from "@uiw/react-md-editor";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import Snackbar from "@material-ui/core/Snackbar";
import config from "./config";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "20px",
    marginTop: "10px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "10px",
  },
  text: {
    color: "primary",
    fontWeight: "800",
  },
}));

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [showAlert, setshowAlert] = useState(false);

  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      title: title,
      body: body,
    };
    console.log(data);

    axios
      .post(`${config.BaseUrl}/ask`, {title:title,body:body})
      .then((res) => {
        if (res.data === "loginRequired") {
          setshowAlert(true);
        } else if (res.data === "QAdded") {
          window.location = config.BaseUrl;
        }
      })
      .catch((err) => {
        console.log(err, "error while asking question");
      });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "8px" }}>
      <CssBaseline />
      <Typography align="center" color="primary" variant="h4">
        What is your question?
      </Typography>
      <TextField
        className={classes.root}
        width="100 vw"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Typography variant="body1" color="primary">
        Enter your code or question in detail here
      </Typography>
      <Editor value={body} setValue={setBody} />
      <br />
      <div className={classes.center}>
        <Button
          color="primary"
          variant="contained"
          disabled={title.trim() != "" ? false : true}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit question
        </Button>
        <p></p>
        {showAlert && (
          <Snackbar
            open={showAlert}
            onClose={() => {
              setshowAlert(false);
            }}
          >
            <Alert
              severity="error"
              onClose={() => {
                setshowAlert(false);
              }}
            >
              Please login to ask question —{" "}
              <Link href="http://127.0.0.1:8000/login/">login</Link>
            </Alert>
          </Snackbar>
        )}
      </div>
    </Container>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
