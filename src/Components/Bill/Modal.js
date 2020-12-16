import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Modal.css'

function MyVerticallyCenteredModal(props) {
    const handleSubmit = (e) => {
      e.preventDefault();

      // axios
      //   .get('http://localhost:3001/:id')
      //   .then((response) => console.log('get book'))
      //   .catch(err => {
      //     console.error(err);
      //   });
    };
    return (
      <Modal className="modal-bg"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Add Book and Quantity
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          
        <span>Book Id! <input type="text" name="feedback-text" id="feedback-text" className="feedback-box" required/></span><br/><br/>
        <span>Quantity <input type="text" name="feedback-email" id="feedback-email"  className="feedback-box" required/></span><br/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
     );
  }
  
  function My_Modal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
      <div className="abc">
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add
        </Button>
      </div>
        
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
export default My_Modal;