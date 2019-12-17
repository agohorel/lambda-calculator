import styled from "styled-components";
import { colors } from "./Styles/colors";

const Button = styled.button`
  background-color: ${props =>
    props.operator ? colors.op : props.special ? colors.special : colors.num};
  border: none;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  font-size: 32px;
  color: white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  margin: 1rem;
`;

export { Button };
