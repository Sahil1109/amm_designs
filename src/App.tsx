import React from "react";
import "./App.css";
import ButtonForward from "./Components/StyledButton";
import TextFieldAmm from "./Components/TextFieldAmm";
import Radio from "./Components/Radio";
import StyledSlider from "./Components/StyledSlider";
import SearchField from "./Components/SearchField";
import CustomizedCheckbox from "./Components/StyledCheckbox";

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
      <StyledSlider></StyledSlider>
      <br></br>
      <SearchField></SearchField>
      <br></br>
    </div>
  );
}

export default App;
