import React from "react";
import { Button } from "../../Styles/StyledComponents";
import { calculator } from "../../../utils";

export const OperatorButton = ({
  operatorDisplay,
  setStored,
  setOperator,
  setCurrent,
  currentVal,
  storedVal,
  operator
}) => {
  return (
    <Button
      operator="true"
      onClick={e => {
        if (e.target.textContent === "=") {
          setCurrent(calculator(operator, currentVal, storedVal));
        } else {
          setStored(currentVal);
          setOperator(operatorDisplay.value);
        }
      }}
    >
      {operatorDisplay.char}
    </Button>
  );
};
