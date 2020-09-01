import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import clsx from "clsx";
import theme from "../Theme/Theme";

export const ForwardButton = styled(Button)(() => ({
  background: "#10c71c",
  width: "320px",
  textTransform: "none",
  "&:hover": {
    background: "#10c71c",
  },
}));
export const CancelButton = styled(Button)(() => ({
  background: "#c4c2bb",
  width: "120px",
  textTransform: "none",
}));

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 18,
    height: 18,
    boxShadow:
      "inset 0 0 0 1px rgba(255,255,255,.2), inset 0 -1px 0 rgba(255,255,255,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(255,255,255,1)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#fff",
    },
  },
  checkedIcon: {
    backgroundColor: "rgb(255,255,255)",
    // backgroundImage:
    //   "linear-gradient(hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#00cd00,#00cd00 40%,transparent 50%)",
      content: '""',
      margin: "1px",
    },
    // "input:hover ~ &": {
    //   backgroundColor: "#13a81c"
    // }
  },
});
// Inspired by blueprintjs
function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
export default StyledRadio;
