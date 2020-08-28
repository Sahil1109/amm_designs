import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Submit } from "./ComponentStore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StyledCheckbox from "./StyledCheckbox";
const useStyles = makeStyles({
  backButton: {
    backgroundColor: "rgb(237, 141, 24)",
    "&:hover": {
      backgroundColor: "rgb(212,123,15)",
    },
  },
  ok: {
    width: "120px",
  },
  cancel: {
    backgroundColor: "#c2c1be",
    width: "120px",
    "&:hover": {
      backgroundColor: "#adaca6",
    },
  },
});
function StyledButton(props) {
  const classes = useStyles();
  const checkCheckbox = () => {
    console.log("Checked");
  };
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
      <Submit
        endIcon={<ArrowForwardIcon />}
        color="secondary"
        variant="contained"
        size="large"
      >
        Get your approval
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
      <Submit
        color="secondary"
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
      >
        Tailor a solution
      </Submit>
      <br></br>
      <br></br>
      <Submit
        color="secondary"
        variant="contained"
        size="large"
        className={classes.ok}
      >
        Ok
      </Submit>
      <Submit
        color="secondary"
        variant="contained"
        size="large"
        endIcon={<ArrowForwardIcon />}
      >
        Add applicants
      </Submit>
      <Submit
        color="secondary"
        variant="contained"
        size="large"
        className={classes.cancel}
      >
        Remove
      </Submit>
      <Submit
        color="secondary"
        variant="contained"
        size="large"
        className={classes.cancel}
      >
        Cancel/Remove
      </Submit>
      <StyledCheckbox onChange={checkCheckbox}></StyledCheckbox>
    </div>
  );
}
export default StyledButton;
