import React from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

const styles = {
  gridColumn: "1 / 4",
  gridRow: "2 / 2"
};

export const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div style={styles}>
      {specials.map(special => {
        return <SpecialButton key={special} special={special}></SpecialButton>;
      })}
    </div>
  );
};
