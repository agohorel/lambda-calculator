import React from "react";

export const OperatorButton = ({ operator }) => {
  console.log(operator);
  return <button>{operator.char}</button>;
};
