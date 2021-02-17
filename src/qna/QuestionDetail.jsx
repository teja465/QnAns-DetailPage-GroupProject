import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { formatDistance, subDays } from "date-fns";
import MDEditor from "@uiw/react-md-editor";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 345,
    backgroundColor: "white",
    border: "1px solid lightGray",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  background_md: {
    backgroundColor: "white",
    MarginTop: "1px",
  },
  md_style: {
    MarginTop: "1px",
  },
}));

export default function QuestionCardDetail({ question }) {
  const [isLiked, setisLiked] = React.useState(true);

  const [isUnLiked, setisUnLiked] = React.useState(false);

  const [likesNo, setlikesNo] = React.useState(12);

  const [disLikesNo, setdisLikesNo] = React.useState(8);
  let date_on_profile = formatDistance(
    subDays(new Date(question.date), 0),
    new Date()
  );

  //  questionDesc[Text]
  //Likes array
  //dislikes array
  //author name,id,
  // codeBlock ,Language

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <Card className={classes.root}>
        QUESTION
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {question.userName[0]}
            </Avatar>
          }
          title={question.userName}
          subheader={date_on_profile}
        />
        {/* <CardContent>
          <Typography
            variant="body1"
            text="h1"
            component="p"
            className={classes.text}
          >
            <h1> {question.question}</h1>
          </Typography>
        </CardContent> */}
        <CardContent>
          <h3>{question.question}</h3>
          {/* Add markdown field here */}
          <div className={classes.background_md}>
            <MDEditor.Markdown
              source={question.body}
              className={classes.md_style}
            />
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() =>
              setisLiked((prev) => {
                if (prev) {
                  setlikesNo((prevLikes) => prevLikes - 1);
                } else {
                  //Add user in liked array  of answer doc
                  setlikesNo((prevLikes) => prevLikes + 1);
                }
                return !prev;
              })
            }
          >
            {isLiked ? (
              <ThumbUpAltIcon color="primary" />
            ) : (
              <ThumbUpAltOutlinedIcon />
            )}
            {/* ----------------------------------------------------------------- */}
          </IconButton>
          <Typography> {likesNo}</Typography>
          <IconButton
            aria-label="dislike button"
            onClick={() =>
              setisUnLiked((prev) => {
                if (prev) {
                  //remove user form dislike array of answer doc
                  setdisLikesNo((prevdisLikes) => prevdisLikes - 1);
                } else {
                  //Add user in dislike array  of answer doc
                  setdisLikesNo((prevdisLikes) => prevdisLikes + 1);
                }
                return !prev;
              })
            }
          >
            {isUnLiked ? (
              <ThumbDownIcon color="primary" />
            ) : (
              <ThumbDownAltOutlinedIcon />
            )}
          </IconButton>
          <Typography> {disLikesNo}</Typography>
        </CardActions>
      </Card>
    </div>
  );
}
