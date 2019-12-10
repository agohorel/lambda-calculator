import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { Numbers } from "../src/components/ButtonComponents/NumberButtons/Numbers";
import { Operators } from "../src/components/ButtonComponents/OperatorButtons/Operators";
import { Specials } from "../src/components/ButtonComponents/SpecialButtons/Specials";
import { Display } from "../src/components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [currentVal, setCurrentVal] = useState(0);
  const [storedVal, setStoredVal] = useState(null);
  const [operator, setOperator] = useState(null);

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <CalculatorGrid>
          <Display value={currentVal}></Display>
          <Numbers setCurrent={setCurrentVal}></Numbers>
          <Operators
            setStored={setStoredVal}
            setOperator={setOperator}
            setCurrent={setCurrentVal}
            currentVal={currentVal}
            storedVal={storedVal}
            operator={operator}
          ></Operators>
          <Specials></Specials>
        </CalculatorGrid>
      </div>
    </div>
  );
}

export default App;

const CalculatorGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
`;
