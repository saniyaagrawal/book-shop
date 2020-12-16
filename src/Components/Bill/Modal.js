import React,{useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Modal.css'
import axios from 'axios';

function MyVerticallyCenteredModal({modalShow,setModalShow, setObject, object }) {
  const [book, setBook] = useState({});
  const [bookId, setBookId] = useState(2);
  const [quantity, setQuantity] = useState(2);

    const handle = () => {
      // e.preventDefault();
      // console.log('hi')
      axios
        .get(`http://localhost:3001/${bookId}`)
        .then((response) => setBook(response.data))
        .catch(err => {
          console.error(err);
        });
        // console.log(object.books);

        // var newObj=object.books;
        // newObj.push({
        //   book_id:book.bookId,
        //   quantity:book.quantity
        // });
        // setObject(newObj);
    };
    return (
      <Modal className="modal-bg"
        show={modalShow}
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
          
        <span>Book Id 
          <input type="text" name="feedback-text" id="feedback-text" className="feedback-box" value={bookId} onChange={(x)=>setBookId(x)} required/>
          </span><br/><br/>
        <span>Quantity 
          <input type="text" name="feedback-quantity" id="feedback-quantity"  className="feedback-box" value={quantity} onChange={(x)=>setQuantity(x)} required/>
        </span><br/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handle()}>Submit</Button>
        </Modal.Footer>
      </Modal>
     );
  }
  
  function My_Modal({ setObject, object }) {
    const [modalShow, setModalShow] = React.useState(false);
    // console.log(object);
    return (
      <>
      <div className="abc">
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add
        </Button>
      </div>
        <MyVerticallyCenteredModal
          modalShow={modalShow}
          setModalShow={setModalShow}
          object={object} setObject={setObject}
        />
      </>
    );
  }
export default My_Modal;