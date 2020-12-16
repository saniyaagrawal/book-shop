import React, { useState } from "react";
 import "./BillFlow.css";
import { Button } from '@material-ui/core';
import Bill from "./Bill";
import Type from "./Type";
import Details from "./Details";

const BillFlow = () => {
  const [screen, setScreen] = useState(1);

  const [object, setObject] = useState({
    customer:{
          name:"",
          mobile_no:"",
          email_id:""
      },
      books:[{
        book_id:"1",
        quantity:"1"
      }],
      type:"purchase",
      total:0,
      time:"",
      store_id:1,
  });

  // const changeObject=()=>{
  //   // setObject({ ...object, [key]: value });
  //   console.log('hi')
  // }
  
  const handleSubmit = () => {
    if(screen===1)setScreen(2);
    else if(screen===2)setScreen(3);
    else setScreen(1);
  };

  return (
    <>
      <div>
          {screen===1 ? <Type handleSubmit={()=>handleSubmit()} object={object} setObject={setObject} /> 
          : screen===2 ? <Details handleSubmit={()=>handleSubmit()} object={object} setObject={setObject} /> 
          : <Bill handleSubmit={()=>handleSubmit} object={object} setObject={setObject} />}
      </div>
    </>
  );
};
export default BillFlow;
