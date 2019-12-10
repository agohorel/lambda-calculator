import React from "react";
import { Button } from "../../Styles/StyledComponents";

export const NumberButton = ({ number, setCurrent }) => {
         return (
           <Button
             onClick={e => setCurrent(Number(e.target.textContent))}
             number
           >
             {number}
           </Button>
         );
       };
