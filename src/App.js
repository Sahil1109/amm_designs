import React from "react";
import "./App.css";
import ButtonForward from "./Components/ButtonForward";
import TextFieldAmm from "./Components/TextFieldAmm";
import Radio from "./Components/Radio";

function App() {
  return (
    <div className="App">
      <br></br>
      <ButtonForward text={"Your existing loan"}></ButtonForward>
      <br></br>
      <TextFieldAmm placeholder="$ 000 000"></TextFieldAmm>
      <br></br>
      <Radio></Radio>
    </div>
  );
}

export default App;
