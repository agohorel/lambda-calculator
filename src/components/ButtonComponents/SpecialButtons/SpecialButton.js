import React from "react";
import { Button } from "../../Button";

export const SpecialButton = ({
  special,
  currentVal,
  setCurrent,
  storedVal,
  setStored
}) => {
  return (
    <Button
      special
      onClick={e => {
        if (e.target.textContent === "C") {
          setCurrent(0);
          setStored(0);
        }
      }}
    >
      {special}
    </Button>
  );
};
