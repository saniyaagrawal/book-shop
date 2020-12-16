import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./Bill.css";
import SaveIcon from "@material-ui/icons/Save";
import My_Modal from './Modal';
import axios from 'axios';

function Bill({ handleSubmit, setObject, object }) {
  
   const handleSubmitt =()=>{
      // handleSubmit()
      var newObj=object;
      var today = new Date();
   //  this.onemonth=new Date(new Date().setDate(today.getDate()-30));
      newObj.time=2;
      newObj.store_id=localStorage.getItem("store_id");
      // newObj.total=

      setObject(newObj);
      
      // console.log(today)

      axios
      .post('http://localhost:3001/bill', object)
      .then(() => console.log(object))
      .catch(err => {
        console.error(err);
      });
    }
   // console.log(object);
  return (
    <div className='bill_back'>
      <Typography style={{ padding: 16 }} variant="h3">
        Bill Screen
      </Typography>

      <My_Modal object={object} setObject={setObject} />
      <div className="add_row">
              
              {/* <Link to="/"> */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmitt}
              >
                Save
              </Button>
              {/* </Link> */}
            </div>
            <div class="billtable">
               <table class="table table-dark table-striped table-bordered">
                  <thead>
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                     </tr>
                  </thead>
                  <tbody>
                      {object.books.map((x)=>(
                        <div>
                        <th scope="row">1</th>
                        <td>{x.book_id}</td>
                        {/* <td>{x.quantity}</td> */}
                        {/* <td>{x.price}</td> */}
                        </div>
                       
                        ))}
                    
                     <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                     </tr>
                     <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                     </tr>
                     <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            
      
      <div class="left-bottom">
         
         <h3 id="price">Total Price:</h3>
      </div>
         
              
    </div>
  );
  
}

export default Bill;

// import React, { useState } from "react";
// //  import "./Bill.css";
// import { Button, Modal } from "@material-ui/core";
// import SaveIcon from "@material-ui/icons/Save";
// import { render } from "@testing-library/react";

// const Bill = () => {
//   state = {
//     isOpen: false
//   };

//   openModal = () => this.setState({ isOpen: true });
//   closeModal = () => this.setState({ isOpen: false });
//   render() {
//     return (
//       <>
//         <div className="background">
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             startIcon={<SaveIcon />}
//             onClick={this.openModal}
//           >
//             Add Book!
//           </Button>
//           <Modal show={this.state.isOpen} onHide={this.closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={this.closeModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </>
//     );
//   }
  
// };
// export default Bill;
