import React, { useState } from "react";
 import "./Type.css";
import { Button } from '@material-ui/core';

const Type = ({ handleSubmit }) => {
  const [type, setType] = useState(1);
console.log('hi')
  return (
    <>
      <div className="background">
        <div className="buttons">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className='button'
                    style={{backgroundColor:'pink'}}
                >
                   Purchase 
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className='button'
                    style={{backgroundColor:'pink', marginTop: 30}}
                >
                   Issue
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
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
