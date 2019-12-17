import React from "react";
import styled from "styled-components";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

export const Specials = ({ currentVal, setCurrent, storedVal, setStored }) => {
  return (
    <SpecialsContainer>
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
    </SpecialsContainer>
  );
};

const SpecialsContainer = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;
