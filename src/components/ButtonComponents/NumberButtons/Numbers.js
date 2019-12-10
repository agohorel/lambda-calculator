import React from "react";
import { numbers } from "../../../data";
import { NumberButton } from "../NumberButtons/NumberButton";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

export const Numbers = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {numbers.map(number => {
        return <NumberButton key={number} number={number}></NumberButton>;
      })}
    </div>
  );
};
