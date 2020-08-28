import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
export const fieldStyles = makeStyles((theme) => ({
  root: {
    padding: "4px 3px",
    display: "flex",
    alignItems: "center",
    margin: "0 auto",
    width: 312,
    border: "1px solid transparent",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));
function StyledField() {
  const classes = fieldStyles();

  return (
    <div>
      <Paper elevation="0" className={classes.root}>
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
          placeholder="0.0"
          endAdornment={<InputAdornment position="start">%</InputAdornment>}
        />
      </Paper>
    </div>
  );
}

export default StyledField;
