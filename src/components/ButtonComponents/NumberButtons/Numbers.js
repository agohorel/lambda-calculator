import React from "react";
import { numbers } from "../../../data";
import { NumberButton } from "../NumberButtons/NumberButton";

const styles = {
  gridColumn: "1 / 3",
  gridRow: "3 / 6"
};

export const Numbers = ({ setCurrent }) => {
  // STEP 2 - add the imported data to state
  return (
    <div style={styles}>
      {numbers.map(number => {
        return (
          <NumberButton
            setCurrent={setCurrent}
            key={number}
            number={number}
          ></NumberButton>
        );
      })}
    </div>
  );
};
