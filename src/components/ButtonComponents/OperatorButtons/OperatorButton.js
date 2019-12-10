import React from "react";
import { Button } from "../../Styles/StyledComponents";

export const OperatorButton = ({ operator }) => {
  return <Button operator="true">{operator.char}</Button>;
};
