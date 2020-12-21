import React,{useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import './Modal.css'
import axios from 'axios';

function MyVerticallyCenteredModal(props) {
  const [book, setBook] = useState({});
  const [bookId, setBookId] = useState();
  const [quantity, setQuantity] = useState();
  // const {object}=props;
  
  // console.log(object);
    const handle = () => {
      // e.preventDefault();
      // console.log('hi')

      axios
        .get(`http://localhost:3001/${bookId}`)
        .then((response) => {
          setBook(response.data)
          
          var newObj=props.object;
          if(newObj.books)
          {
            newObj.books.push({
              book_id:bookId,
              quantity:quantity
            });
            props.setObject(newObj);
            // console.log(props.object.books);
          }
          if(props.mybooks){
            var neww=props.mybooks;
            neww.push(book);
            props.setMybooks(neww);
            console.log(props.mybooks);
          }
        })
        .catch(err => {
          console.error(err);
        });
        // console.log(props.object.books);
        
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
          
        <span>Book Id 
          <input type="number" name="feedback-text" id="feedback-text" className="feedback-box" value={bookId} onChange={(x)=>setBookId(x.target.value)} required/>
          </span><br/><br/>
        <span>Quantity 
          <input type="number" name="feedback-quantity" id="feedback-quantity"  className="feedback-box" value={quantity} onChange={(x)=>setQuantity(x.target.value)} required/>
        </span><br/><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handle()}>Submit</Button>
        </Modal.Footer>
      </Modal>
     );
  }
  
  function My_Modal({ setObject, object, mybooks, setMybooks }) {
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
          object={object} setObject={setObject} mybooks={mybooks} setMybooks={setMybooks}
        />
      </>
    );
  }
export default My_Modal;