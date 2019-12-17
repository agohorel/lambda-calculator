import React from "react";
import { Button } from "../../Button";

export const NumberButton = ({ number, setCurrent, currentVal }) => {
  return (
    <Button
      onClick={e => setCurrent(Number(`${currentVal}${e.target.textContent}`))}
      number
    >
      {number}
    </Button>
  );
};
