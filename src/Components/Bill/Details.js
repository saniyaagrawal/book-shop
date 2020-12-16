import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import "./Details.css";

const Details = ({ handleSubmit, setObject, object }) => {
  const [name, setName] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [email, setEmail] = useState("");
  // const [price, setPrice] = useState("");

  const handleSubmitt =()=>{
    handleSubmit()
    var newObj=object;
    newObj.customer.name=name;
    newObj.customer.mobile_no=mobile_no;
    newObj.customer.email_id=email;
    setObject(newObj);
    // console.log(object)
  }

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
                  value={mobile_no}
                  onChange={(e) => setMobile_no(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="add_row">
              <h3 className="add_name">Email :</h3>
              <div className="add_input">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleSubmitt}
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
