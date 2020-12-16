import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "./Details.css";

const Details = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [author, setAuthor] = useState("");
  // const [price, setPrice] = useState("");

  return (
    <>
      <div className="background">
        <div className="heading_details">Customer Details</div>
        <form noValidate autoComplete="off">
          <div className="add_form">
            <div className="add_row">
              <h3 className="add_name">Name:</h3>
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
              <h3 className="add_name">Mobile No:</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Mobile No."
                  variant="outlined"
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Email :</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Duration"
                  variant="outlined"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
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
export default Details;
