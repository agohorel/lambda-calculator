import React from "react";
import { Button } from "../../Styles/StyledComponents";

export const NumberButton = ({ number, setter }) => {
  return <Button onClick={(e) => setter(Number(e.target.textContent))} number>{number}</Button>;
};
