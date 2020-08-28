import React from "react";
import StyledRadio from "./ComponentStore";

export default function RadioButton() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <StyledRadio
        checked={selectedValue === "c"}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ "aria-label": "C" }}
      />
      <StyledRadio
        checked={selectedValue === "d"}
        onChange={handleChange}
        value="d"
        name="radio-button-demo"
        inputProps={{ "aria-label": "D" }}
      />
      <StyledRadio
        checked={selectedValue === "e"}
        onChange={handleChange}
        value="e"
        name="radio-button-demo"
        inputProps={{ "aria-label": "E" }}
      />
    </div>
  );
}
