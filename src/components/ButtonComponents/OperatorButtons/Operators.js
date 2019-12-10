import React from "react";
import { operators } from "../../../data";
import { OperatorButton } from "./OperatorButton";

const styles = {
  gridColumn: "3 / 4",
  gridRow: "2 / 6"
};

export const Operators = ({
  setStored,
  setOperator,
  setCurrent,
  currentVal,
  storedVal,
  operator
}) => {
  return (
    <div style={styles}>
      {operators.map(op => {
        return (
          <OperatorButton
            setStored={setStored}
            setOperator={setOperator}
            setCurrent={setCurrent}
            currentVal={currentVal}
            storedVal={storedVal}
            operator={operator}
            key={op.char}
            operatorDisplay={op}
          ></OperatorButton>
        );
      })}
    </div>
  );
};
