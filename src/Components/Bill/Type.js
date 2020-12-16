import React, { useState } from "react";
 import "./Type.css";
import { Button } from '@material-ui/core';

const Type = ({ handleSubmit, setObject, object }) => {
  // const [type, setType] = useState(1);

  const buttonClick =(value)=>{
    // console.log(value)
    handleSubmit()
    var newObj=object;
    newObj.type=value;
    setObject(newObj);
    // console.log(object)
  }

  return (
    <>
      <div className="background">
        <div className="buttons">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>buttonClick('purchase')}
                    className='button'
                    style={{backgroundColor:'pink'}}
                >
                   Purchase 
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>buttonClick('issue')}
                    className='button'
                    style={{backgroundColor:'pink', marginTop: 30}}
                >
                   Issue
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={buttonClick}
                    className='button'
                    style={{backgroundColor:'pink', marginTop: 30}}
                >
                   Return
                </Button>
        </div>
      </div>
    </>
  );
};
export default Type;
