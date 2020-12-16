import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import "./Add.css";
import { Link, Redirect } from "react-router-dom";

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

    const store_id=parseInt(localStorage.getItem("store_id"));
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
      .then(() => {})
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
            <Link to='/'>
             <div className="btn btn-primary" onChange={handleSubmit}>
               Save
               </div>
            </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Add;
