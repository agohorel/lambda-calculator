import React from "react";
import styled from "styled-components";
import { operators } from "../../../data";
import { OperatorButton } from "./OperatorButton";

export const Operators = ({
  setStored,
  setOperator,
  setCurrent,
  currentVal,
  storedVal,
  operator
}) => {
  return (
    <OperatorsContainer>
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
    </OperatorsContainer>
  );
};

const OperatorsContainer = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 6;
  display: grid;
  justify-items: center;
`;