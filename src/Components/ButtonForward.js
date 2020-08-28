import React from "react";
import Button from "@material-ui/core/Button";
import Theme from "../Theme/Theme";
import { makeStyles, styled } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Submit } from "./ComponentStore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function ButtonForward(props) {
  // const classes = useStyles();
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
        size="large"
      >
        Go back
      </Submit>
    </div>
  );
}
export default ButtonForward;
