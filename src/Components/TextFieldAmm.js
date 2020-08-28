import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import { fieldStyles } from "./StyledField";
import LockIcon from "@material-ui/icons/Lock";
export default function TextFieldAmm() {
  const classes = fieldStyles();
  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="000,000"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </Paper>
      <br></br>
      <Paper elevation="0" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="000,000"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          endAdornment={
            <InputAdornment position="start">
              <LockIcon></LockIcon>{" "}
            </InputAdornment>
          }
        />
      </Paper>
    </div>

    // <Paper elevation="0" className={classes.root}>
    //   <InputBase
    //     className={classes.input}
    //     placeholder="0.0"
    //     endAdornment={<InputAdornment position="start">%</InputAdornment>}
    //   />
    // </Paper>
  );
}
