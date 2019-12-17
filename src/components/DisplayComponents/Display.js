import React from "react";
import styled from "styled-components";

export const Display = ({ value }) => {
  return <DisplayContainer className="display">{value}</DisplayContainer>;
};

const DisplayContainer = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 1;
  justify-self: center;
  margin-bottom: 2rem;
`;
