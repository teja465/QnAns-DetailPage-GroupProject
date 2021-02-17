import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    Maxwidth: "84",
    marginLeft: "8%",
    marginRight: "8%",
    paddingBottom: "100px",
  },
});

export default function Animations() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <br />
      <br />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <br />
      <br />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <br />
      <br />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <br />
      <br />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <br />
      <br />
      <h5 style={{ Marginleft: "200px" }}> fetching data please wait..</h5>
    </div>
  );
}
