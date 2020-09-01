import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import StyledField, { fieldStyles } from "./StyledField";
import LockIcon from "@material-ui/icons/Lock";
import NumberFormat from "react-number-format";
import { styled } from "@material-ui/core";
export default function TextFieldAmm() {
  const classes = fieldStyles();
  return (
    <div>
      <StyledField
        placeholder="0.00"
        // endAdornment={
        //   <InputAdornment position="start" style={{marginRight:"250px"}}>
        //     {/* <LockIcon></LockIcon>{" "} */}%
        //   </InputAdornment>
        // }
      ></StyledField>
      <br></br>
      <NumberFormat
        customInput={StyledField}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br></br>
      <NumberFormat customInput={StyledField} suffix={"%"} />
      <br></br>
      <StyledField
        placeholder="000 000"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        endAdornment={
          <InputAdornment position="start">
            <LockIcon></LockIcon>{" "}
          </InputAdornment>
        }
      ></StyledField>
      {/* <Paper elevation={0} className={classes.root}>
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
      </Paper> */}
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
