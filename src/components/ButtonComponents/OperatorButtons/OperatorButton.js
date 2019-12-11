import React from "react";
import { Button } from "../../Button";
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
          setCurrent(calculator(operator, storedVal, currentVal));
        } else {
          setStored(currentVal);
          setCurrent(0);
          setOperator(operatorDisplay.value);
        }
      }}
    >
      {operatorDisplay.char}
    </Button>
  );
};
