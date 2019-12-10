import React from "react";
import { operators } from "../../../data";
import { OperatorButton } from "./OperatorButton";

export const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(op => {
        return <OperatorButton key={op.char} operator={op}></OperatorButton>;
      })}
    </div>
  );
};
