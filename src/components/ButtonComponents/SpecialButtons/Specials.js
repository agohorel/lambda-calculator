import React from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

const styles = {
  gridColumn: "1 / 4",
  gridRow: "2 / 2"
};

export const Specials = ({ currentVal, setCurrent, storedVal, setStored }) => {
  // STEP 2 - add the imported data to state

  return (
    <div style={styles}>
      {specials.map(special => {
        return (
          <SpecialButton
            currentVal={currentVal}
            setCurrent={setCurrent}
            storedVal={storedVal}
            setStored={setStored}
            key={special}
            special={special}
          ></SpecialButton>
        );
      })}
    </div>
  );
};
