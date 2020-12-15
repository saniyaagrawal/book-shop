import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Modal.css'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="modal-bg"
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          
        <span>Name  <input type="text" name="feedback-text" id="feedback-text" className="feedback-box"/></span><br/><br/>
        <span>E-mail <input type="text" name="feedback-email" id="feedback-email"  className="feedback-box"/></span><br/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
     );
  }
  
  function My_Modal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Feedback
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
export default My_Modal;