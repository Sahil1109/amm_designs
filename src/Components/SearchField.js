import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "4px 3px",
    display: "flex",
    alignItems: "center",
    width: 320,
    margin: "0 auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#13a81c",
    color: "#fff",
    borderRadius: 0,
    borderTopRightRadius: "3px",
    borderBottomRightRadius: "3px",
    "&:hover": {
      background: "#13a81c",
    },
  },
}));

export default function SearchField() {
  const classes = useStyles();

  return (
    <Paper component="form" elevation="1" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
