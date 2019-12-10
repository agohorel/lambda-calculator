import React from "react";
import { operators } from "../../../data";
import { OperatorButton } from "./OperatorButton";

const styles = {
  gridColumn: "3 / 4",
  gridRow: "2 / 6"
};

export const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div style={styles}>
      {operators.map(op => {
        return <OperatorButton key={op.char} operator={op}></OperatorButton>;
      })}
    </div>
  );
};
