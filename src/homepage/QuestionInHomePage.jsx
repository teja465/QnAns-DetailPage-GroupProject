import React from "react";
import "./Question.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
function QuestionInHomePage() {
  const classes = useStyles();

  const question =
    "Suppose I am being attacked by a wild animal (lion, tiger, bear etc.). Can I save myself by attacking them on their eyes or balls (lower part)Suppose I am being attacked by a wild animal (lion, tiger, bear etc.). Can I save myself by attacking them on their eyes or balls (lower part)?";
  const userName = "james bond_001";
  const date = "1602514361687";
  return (
    <div id="main_body">
      <div id="header">
        <Avatar className={classes.orange}>N</Avatar>

        <div id="user_name">{userName}</div>
      </div>
      <div id="date">5 hours  ago</div>
    </div>
  );
}

export default QuestionInHomePage;
