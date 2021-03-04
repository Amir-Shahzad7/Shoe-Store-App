import { Button } from "@material-ui/core";
import React from "react";
import "./Home.css";
import IMG1 from "./Image1.png";
import IMG2 from "./Image2.png";
import IMG3 from "./Image3.png";
import IMG4 from "./Image4.png";
import IMG5 from "./Image5.png";
import IMG6 from "./Image6.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <p className="Font">FIND THAT</p>
        <p className="Font">FLEECE FEELING</p>
      </div>
      <div>
        <img
          style={{
            display: "block",
            maxWidth: "95%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          src={IMG1}
          alt="Grey Nike"
        />
      </div>
      <div>
        <p style={{ fontSize: "25px", paddingLeft: "2.5%" }}>
          New Air Max Arrivals
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{
            display: "block",
            maxWidth: "47%",
            paddingLeft: "2.5%",
            paddingTop: "1%",
          }}
          src={IMG2}
          alt="Blue Nike"
        ></img>
        <img
          style={{
            display: "block",
            maxWidth: "47%",
            paddingLeft: "1%",
            paddingTop: "1%",
          }}
          src={IMG3}
          alt="LightGrey Nike"
        ></img>
      </div>
      <div>
        <p className="Font">TURN UP</p>
        <p className="Font">THE LIGHTS</p>
      </div>
      <div>
        <img
          style={{
            display: "block",
            maxWidth: "95%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "1%",
          }}
          src={IMG4}
          alt="Grey Nike"
        ></img>
      </div>
      <div>
        <p style={{ fontSize: "25px", paddingLeft: "2.5%" }}>Featured Styles</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          style={{
            display: "block",
            maxWidth: "47%",
            paddingLeft: "2.5%",
            paddingTop: "1%",
          }}
          src={IMG5}
          alt="Blue Nike"
        ></img>
        <img
          style={{
            display: "block",
            maxWidth: "47%",
            paddingLeft: "1%",
            paddingTop: "1%",
          }}
          src={IMG6}
          alt="LightGrey Nike"
        ></img>
      </div>
      <div>
        <p className="BottomFont">Where</p>
        <p className="BottomFont">All Athletes</p>
        <p className="BottomFont">Belong.</p>
      </div>
      <div className="Buttons">
        <Button
          style={{
            borderRadius: "20px",
            fontWeight: "100",
            color: "white",
            backgroundColor: "#333",
            marginRight: "5px",
            textTransform: "none",
          }}
        >
          Join Us
        </Button>
        <Button
          style={{
            borderRadius: "20px",
            fontWeight: "100",
            color: "white",
            backgroundColor: "#333",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Home;
