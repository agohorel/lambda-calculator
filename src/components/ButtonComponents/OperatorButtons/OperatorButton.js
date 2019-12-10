import React from "react";
import { Button } from "../../Styles/StyledComponents";

export const OperatorButton = ({
  operator,
  setStored,
  setOperator,
  currentVal
}) => {
  return (
    <Button
      operator="true"
      onClick={e => {
        setStored(currentVal);
        setOperator(e.target.textContent);
      }}
    >
      {operator.char}
    </Button>
  );
};
