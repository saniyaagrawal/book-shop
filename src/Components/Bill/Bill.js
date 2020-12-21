import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./Bill.css";
import SaveIcon from "@material-ui/icons/Save";
import My_Modal from './Modal';
import axios from 'axios';

function Bill({ handleSubmit, setObject, object }) {
   const [mybooks, setMybooks]=useState([{
      book_id:"1",
      name:"Harry Potter",
      quantity:"2",
      price:"200"
   },
   {
      book_id:"2",
      name:"Half Girlfriend",
      quantity:"4",
      price:"350"
   },
   {
      book_id:"3",
      name:"Alchemist",
      quantity:"7",
      price:"400"
   }
]);
   // const forceUpdate = React.useCallback(() => setMybooks(mybooks), []);

   // useEffect(() => {
   //    console.log("s")
   //    // forceUpdate();
   // }, [mybooks])
   var total=950;
   const handleSubmitt =()=>{
      // handleSubmit()
      var newObj=object;
      var today = new Date();
   //  this.onemonth=new Date(new Date().setDate(today.getDate()-30));
      newObj.time=2;
      newObj.store_id=localStorage.getItem("store_id");
      newObj.total=total;
      newObj.books=mybooks;
      setObject(newObj);
      
      // console.log(object);

      axios
      .post('http://localhost:3001/bill', object)
      .then(() => {})
      .catch(err => {
        console.error(err);
      });
      alert('Bill Added');
      // console.log(object);
    }
   // console.log(mybooks);
  return (
     
    <div className='bill_back'>
      <Typography style={{ padding: 16 }} variant="h3">
        Bill Screen
      </Typography>

      <My_Modal object={object} setObject={setObject} mybooks={mybooks} setMybooks={setMybooks}/>
      <div className="add_row">
            </div>
            
            <div class="billtable">
               <table class="table table-dark table-striped table-bordered">
                  <thead>
                     <tr>
                        <th>Boook_id</th>
                        <th>Book Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                     </tr>
                  </thead>
                  <tbody>
                  {/* {mybooks.map((x)=>{<div>
                           <td>{x.book_id}</td>
                           <td>{x.name}</td>
                           <td>{x.quantity}</td>
                           <td>{x.price}</td>
                           </div>
                        })} */}
                        {/* {console.log(mybooks)} */}
                        {/* {forceUpdate()} */}
                     {mybooks.map((x)=>{return(<tr>
                           <th scope="row">{x.book_id ? x.book_id: ''}</th>
                           <td>{x.name ? x.name :""}</td>
                           <td> {x.quantity ? x.quantity:""}</td>
                           <td>{x.price ? x.price:"" && x.price?total=total+parseInt(x.price):''}</td>
                           </tr>)
                        })}
                     
                  </tbody>
               </table>
            </div>
            
      
      <div class="right-bottom" style={{marginLeft:1100}}>
         <h3 id="price">Total Price:{total}</h3>
      </div>
      <div style={{marginLeft:600}}>
      <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmitt}
              >
                Pay Bill
              </Button>
      </div>
         
              
    </div>
  );
  
}

export default Bill; 
