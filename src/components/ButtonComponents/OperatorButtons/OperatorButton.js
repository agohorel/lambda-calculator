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
        setOperator(operator.value);
      }}
    >
      {operator.char}
    </Button>
  );
};
