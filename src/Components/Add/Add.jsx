import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "./Add.css";

const Add = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity_issue, setQuantity_issue] = useState("");
  const [quantity_purchase, setQuantity_purchase] = useState("");
  const [genre, setGenre] = useState("");
  const [shelf, setShelf] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <h3 className="add_name">Details of the book:</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Details"
                  variant="outlined"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Author of the book:</h3>
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
              <h3 className="add_name">Price of the book : </h3>
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
                  value={quantity_purchase}
                  onChange={(e) => setQuantity_purchase(e.target.value)}
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
                  value={quantity_issue}
                  onChange={(e) => setQuantity_issue(e.target.value)}
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
                  value={shelf}
                  onChange={(e) => setShelf(e.target.value)}
                />
              </div>
            </div>
            <div className="add_row">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default Add;
