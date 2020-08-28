import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import tick2 from "./tick2.png";
const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: 3,
    width: 18,
    height: 18,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#fff",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    // "input:hover ~ &": {
    //   backgroundImage: 'url("./tick.png")',
    // },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 18,
      height: 18,
      backgroundColor: "white",
      backgroundImage: `url(${tick2})`,
      //   backgroundImage:
      //     'url("https://www.freepngimg.com/download/green_tick/27895-7-green-tick-transparent.png")',
      backgroundSize: "18px 18px",
      content: '""',
      backgroundRepeat: "no-repeat",
      borderRadius: 3,
    },
    // "input:hover ~ &": {
    //   backgroundColor: "#106ba3",
    // },
  },
});

// Inspired by blueprintjs
function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}
export default StyledCheckbox;
