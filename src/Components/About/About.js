import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import IMG1 from "./Image1.png";
import IMG2 from "./Image2.png";
import IMG3 from "./Image3.png";
import IMG4 from "./Image4.png";

function About() {
  return (
    <div>
      <p className="AboutHeading">About Nike</p>
      <hr />
      <div className="Description">
        <p>
          Our mission is what drives us to do everything possible to expand
          human potential. We do that by creating groundbreaking sport
          innovations, by making our products more sustainably, by building a
          creative and diverse global team and by making a positive impact in
          communities where we live and work. Based in Beaverton, Oregon, NIKE,
          Inc. includes the Nike, Converse, and Jordan brands.
        </p>
      </div>
      <div className="ImageDIV">
        <div>
          <img className="Image" src={IMG1} alt="Nike" />
        </div>
        <div>
          <p className="Text">INNOVATION</p>
          <hr className="HrTag" />
          <h2 className="Text" style={{ fontFamily: "sans-serif" }}>
            WE DARE TO DESIGN THE FUTURE OF SPORT
          </h2>
          <Typography align="center" color="textSecondary">
            To make big leaps, we take big risks.{" "}
            <Link to="/About">Learn more</Link> about Nike's innovation team,
            platforms and partnership.
          </Typography>
        </div>
        <br />
        <hr style={{width: "70%"}} />
        <br />
        <div>
          <img className="Image" src={IMG2} alt="Nike" />
        </div>
        <div>
          <p className="Text">OUR TEAM</p>
          <hr className="HrTag" />
          <h2 className="Text" style={{ fontFamily: "sans-serif" }}>
            A TEAM THAT'S EMPOVERED, DIVERSE AND INCLUSIVE
          </h2>
          <Typography align="center" color="textSecondary">
            A love of sport unites us.{" "}
            <Link to="/About">Learn more</Link> about Nike's global team.
          </Typography>
        </div>
        <br />
        <hr style={{width: "70%"}} />
        <br />
        <div>
          <img className="Image" src={IMG3} alt="Nike" />
        </div>
        <div>
          <p className="Text">SOCIAL & COMMUNITY IMPACT</p>
          <hr className="HrTag" />
          <h2 className="Text" style={{ fontFamily: "sans-serif" }}>
            THE WORLD IS OUR COMMUNITY
          </h2>
          <Typography align="center" color="textSecondary">
            We believe in the power of sport to move the world.{" "}
            <Link to="/About">Learn more</Link> Nike makes an impact in local communities.
          </Typography>
        </div>
        <br />
        <hr style={{width: "70%"}} />
        <br />
        <div>
          <img className="Image" src={IMG4} alt="Nike" />
        </div>
        <div>
          <p className="Text">SUSTAINABLE BUSINESS INNOVATION</p>
          <hr className="HrTag" />
          <h2 className="Text" style={{ fontFamily: "sans-serif" }}>
            PROTECTING THE FUTURE OF SPORT
          </h2>
          <Typography align="center" color="textSecondary">
            We believe in a fair, sustainable future-one where everyone thrives on a healthy planet and level playing field.{" "}
            <Link to="/About">Learn more</Link> Nike is using the power of sport to move the world forward.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
