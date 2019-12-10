import React from "react";
import { operators } from "../../../data";
import { OperatorButton } from "./OperatorButton";

const styles = {
  gridColumn: "3 / 4",
  gridRow: "2 / 6"
};

export const Operators = ({ setStored, setOperator, currentVal }) => {
  return (
    <div style={styles}>
      {operators.map(op => {
        return (
          <OperatorButton
            setStored={setStored}
            setOperator={setOperator}
            currentVal={currentVal}
            key={op.char}
            operator={op}
          ></OperatorButton>
        );
      })}
    </div>
  );
};
