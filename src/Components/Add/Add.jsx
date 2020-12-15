import React, { useState } from "react";
import { TextField, Link } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import "./Add.css";

const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantityIssue, setQuantityIssue] = useState("");
  const [quantityPurchase, setQuantityPurchase] = useState("");
  const [genre, setGenre] = useState("");
  const [shelf_number, setShelf_number] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const store_id=1;
    const book = {
      name,
      description,
      author,
      price,
      quantityIssue,
      quantityPurchase,
      genre,
      shelf_number, 
      store_id
    };

    axios
      .post('http://localhost:3001/add', book)
      .then(() => console.log(book))
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="background">
        <form noValidate autoComplete="off">
          <div className="add_form">
            <div className="add_row">
              <h1 className="add_name">Name of the book:</h1>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Description: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Details"
                  variant="outlined"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Author:</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Author"
                  variant="outlined"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Price: </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Quantity(Purchase) : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Purchase"
                  variant="outlined"
                  value={quantityPurchase}
                  onChange={(e) => setQuantityPurchase(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Quantity(Issue) : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Issue"
                  variant="outlined"
                  value={quantityIssue}
                  onChange={(e) => setQuantityIssue(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Genre : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Genre"
                  variant="outlined"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Shelf Number : </h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Shelf Number"
                  variant="outlined"
                  value={shelf_number}
                  onChange={(e) => setShelf_number(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              
              {/* <Link to="/"> */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmit}
              >
                Save
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Add;
