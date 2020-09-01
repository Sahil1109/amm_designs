import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ForwardButton, CancelButton } from "./ComponentStore";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import StyledCheckbox from "./StyledCheckbox";
import theme from "../Theme/Theme";
import { ButtonProps } from "@material-ui/core";
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
});
function StyledButton(props: ButtonProps) {
  const classes = useStyles();
  const checkCheckbox = () => {
    console.log("Checked");
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ForwardButton
          endIcon={<ArrowForwardIcon />}
          color="primary"
          variant="contained"
          size="large"
        >
          Your existing loan
        </ForwardButton>
        <ForwardButton
          endIcon={<ArrowForwardIcon />}
          color="primary"
          variant="contained"
          size="large"
        >
          Get your approval
        </ForwardButton>
        <br></br>
        <br></br>
        <ForwardButton
          startIcon={<ArrowBackIcon />}
          variant="contained"
          className={classes.backButton}
          size="large"
        >
          Revise my information
        </ForwardButton>
        <ForwardButton
          color="primary"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Tailor a solution
        </ForwardButton>
        <br></br>
        <br></br>
        <ForwardButton
          color="primary"
          variant="contained"
          size="large"
          className={classes.ok}
        >
          Ok
        </ForwardButton>
        <ForwardButton
          color="primary"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Add applicants
        </ForwardButton>
        <CancelButton color="secondary" variant="contained" size="large">
          Remove
        </CancelButton>
        <CancelButton color="secondary" variant="contained" size="large">
          Cancel/Remove
        </CancelButton>
        <StyledCheckbox onChange={checkCheckbox}></StyledCheckbox>
      </div>
    </ThemeProvider>
  );
}
export default StyledButton;
