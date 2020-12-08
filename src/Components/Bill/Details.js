import React, { useState } from "react";
 import "./Details.css";
 import { Button } from '@material-ui/core';

const Details = ({handleSubmit}) => {

  return (
    <>
      <div className="background">
         Details screen
         <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className='button'
                    style={{backgroundColor:'pink'}}
                >
                   Purchase 
                </Button>
      </div>
    </>
  );
};
export default Details;
