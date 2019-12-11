import React from "react";
import styled from "styled-components";
import { numbers } from "../../../data";
import { NumberButton } from "../NumberButtons/NumberButton";

export const Numbers = ({ setCurrent, currentVal }) => {
  return (
    <NumbersContainer>
      {numbers.map(number => {
        return (
          <NumberButton
            setCurrent={setCurrent}
            currentVal={currentVal}
            key={number}
            number={number}
          ></NumberButton>
        );
      })}
    </NumbersContainer>
  );
};

const NumbersContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  & button:nth-of-type(10) {
    width: 210px;
    grid-column: 1 / 3;
    border-radius: 40px;
  }
`;
