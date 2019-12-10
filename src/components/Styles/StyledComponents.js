import styled from "styled-components";
import { colors } from "./colors";

const Button = styled.button`
  background-color: ${props =>
    props.operator ? colors.op : props.special ? colors.special : colors.num};
`;

export { Button };
