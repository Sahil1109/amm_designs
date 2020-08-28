import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles, styled } from "@material-ui/core/styles";
import { fieldStyles } from "./StyledField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
export default function TextFieldAmm() {
  const classes = fieldStyles();
  return (
    <Paper elevation="0" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="000,000"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </Paper>
    // <Paper elevation="0" className={classes.root}>
    //   <InputBase
    //     className={classes.input}
    //     placeholder="0.0"
    //     endAdornment={<InputAdornment position="start">%</InputAdornment>}
    //   />
    // </Paper>
  );
}
