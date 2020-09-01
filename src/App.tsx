import React from "react";
import "./App.css";
import ButtonForward from "./Components/StyledButton";
import TextFieldAmm from "./Components/TextFieldAmm";
import Radio from "./Components/Radio";
import StyledSlider from "./Components/StyledSlider";
import SearchField from "./Components/SearchField";
import CustomizedCheckbox from "./Components/StyledCheckbox";
import GoogleMaps from "./Components/GoogleMap";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";

function App() {
  return (
    <div className="App">
      <br></br>
      <ButtonForward></ButtonForward>
      <br></br>
      <TextFieldAmm></TextFieldAmm>
      <br></br>
      <Radio></Radio>
      <br></br>
      <ThemeProvider theme={theme}>
        <StyledSlider></StyledSlider>
      </ThemeProvider>
      <br></br>
      <GoogleMaps></GoogleMaps>
      <br></br>
      <SearchField></SearchField>
      <br></br>
    </div>
  );
}

export default App;
