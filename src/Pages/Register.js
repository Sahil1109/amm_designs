import React from "react";
import { Grid, Paper, Select, MenuItem, TextField } from "@material-ui/core";

function Register() {
  const [title, setTitle] = React.useState("");
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <div>
      <Paper elevation={1}>
        <Grid container>
          <Grid item xs={12}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={title}
              onChange={handleChange}
            >
              <MenuItem value={"mr"}>Mr.</MenuItem>
              <MenuItem value={"ms"}>Mrs.</MenuItem>
              <MenuItem value={"mrs"}>Mrs.</MenuItem>
            </Select>
          </Grid>
          <Grid>
            <Grid xs={6}>
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
              />
            </Grid>
            <Grid xs={6}>
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid>
            {" "}
            <TextField
              id="outlined-basic"
              label="Date of birth"
              variant="outlined"
            />
          </Grid>
          <Grid>
            {" "}
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          <Grid>
            {" "}
            <TextField id="outlined-basic" label="Mobile" variant="outlined" />
          </Grid>
          <Grid>
            {" "}
            <TextField id="outlined-basic" label="Address" variant="outlined" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Register;
