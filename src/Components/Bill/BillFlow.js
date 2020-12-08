import React, { useState } from "react";
 import "./BillFlow.css";
import { Button } from '@material-ui/core';
import Bill from "./Bill";
import Type from "./Type";
import Details from "./Details";

const BillFlow = () => {
  const [screen, setScreen] = useState(1);

  const handleSubmit = (e) => {
    if(screen===1)setScreen(2);
    else if(screen===2)setScreen(3);
    else setScreen(1);
  };

  return (
    <>
      <div className="background">
          {screen===1 ? <Type handleSubmit={()=>handleSubmit()} /> 
          : screen===2 ? <Details handleSubmit={()=>handleSubmit()} /> 
          : <Bill handleSubmit={()=>handleSubmit()} />}
      </div>
    </>
  );
};
export default BillFlow;
