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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="background">
        <form noValidate autoComplete="off">
          <div className="add_form">
            <div className="add_row">
              <h3 className="add_name">Name of the book:</h3>
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
                  label="Duration"
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
