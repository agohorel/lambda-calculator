import React from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

export const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map(special => {
        return <SpecialButton key={special} special={special}></SpecialButton>;
      })}
    </div>
  );
};
