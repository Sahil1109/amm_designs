import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Submit } from "./ComponentStore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  backButton: {
    backgroundColor: "rgb(237, 141, 24)",
    "&:hover": {
      backgroundColor: "rgb(212,123,15)",
    },
  },
});
function ButtonForward(props) {
  const classes = useStyles();
  return (
    <div>
      <Submit
        endIcon={<ArrowForwardIcon />}
        color="secondary"
        variant="contained"
        size="large"
      >
        {props.text}
      </Submit>
      <br></br>
      <br></br>
      <Submit
        startIcon={<ArrowBackIcon />}
        color="secondary"
        variant="contained"
        className={classes.backButton}
        size="large"
      >
        Revise my information
      </Submit>
    </div>
  );
}
export default ButtonForward;
