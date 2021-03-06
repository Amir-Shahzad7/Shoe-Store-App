import React from "react";
import "./Contact.css";
import { Button, TextField } from "@material-ui/core";

function Contact() {
  return (
    <div>
      <p className="ContactHeading">Contact Us</p>
      <hr />
      <div className="Form">
        <form className="Contact">
          <TextField style={{ width: "50%" }} label="Name" />
          <br />
          <TextField style={{ width: "50%" }} label="Email" />
          <br />
          <TextField style={{ width: "50%" }} label="Address" />
          <br />
          <TextField style={{ width: "50%" }} label="Phone Number" />
        </form>
        <br />
        <div className="TextArea">
          <textarea
            placeholder="Message"
            rows="6"
            style={{
              backgroundColor: "#f5f5f5",
              width: "50%",
              borderWidth: "1px",
              fontFamily: "sans-serif",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
        <br />
        <div className="Button">
          <Button color="secondary" fullWidth={true}>Contact</Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
