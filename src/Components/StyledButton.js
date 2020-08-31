import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Submit } from "./ComponentStore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StyledCheckbox from "./StyledCheckbox";
import theme from "../Theme/Theme";
const useStyles = makeStyles({
  backButton: {
    backgroundColor: "rgb(237, 141, 24)",
    color: "#fff",

    "&:hover": {
      backgroundColor: "rgb(212,123,15)",
      tonalOffset: 0.05,
    },
  },
  ok: {
    width: "120px",
  },
  cancel: {
    width: "120px",
  },
});
function StyledButton(props) {
  const classes = useStyles();
  const checkCheckbox = () => {
    console.log("Checked");
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Submit
          endIcon={<ArrowForwardIcon />}
          color="primary"
          variant="contained"
          size="large"
        >
          {props.text}
        </Submit>
        <Submit
          endIcon={<ArrowForwardIcon />}
          color="primary"
          variant="contained"
          size="large"
        >
          Get your approval
        </Submit>
        <br></br>
        <br></br>
        <Submit
          startIcon={<ArrowBackIcon />}
          variant="contained"
          className={classes.backButton}
          size="large"
        >
          Revise my information
        </Submit>
        <Submit
          color="primary"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Tailor a solution
        </Submit>
        <br></br>
        <br></br>
        <Submit
          color="primary"
          variant="contained"
          size="large"
          className={classes.ok}
        >
          Ok
        </Submit>
        <Submit
          color="primary"
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
          className={classes.cancel}
          variant="contained"
          size="large"
        >
          Cancel/Remove
        </Submit>
        <StyledCheckbox onChange={checkCheckbox}></StyledCheckbox>
      </div>
    </ThemeProvider>
  );
}
export default StyledButton;
