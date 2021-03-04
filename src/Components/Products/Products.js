import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import "./Products.css";
import Shoe1 from "../Images/Shoe1.png";
import Shoe2 from "../Images/Shoe2.png";
import Shoe3 from "../Images/Shoe3.png";
import Shoe4 from "../Images/Shoe4.png";
import Shoe5 from "../Images/Shoe5.png";
import Shoe6 from "../Images/Shoe6.png";
import Shoe7 from "../Images/Shoe7.png";
import Shoe8 from "../Images/Shoe8.png";
import Shoe9 from "../Images/Shoe9.png";
import { Link, Outlet } from "react-router-dom";

const ShoesData = {
  "Nike-Air-Force": {
    ID: 0,
    Name: "Nike Air Force",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$90",
    Image: Shoe1,
  },

  "Nike-React-Infinity-Run": {
    ID: 1,
    Name: "Nike React Infinity Run",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$160",
    Image: Shoe2,
  },

  "Nike-Blazer-Mid": {
    ID: 2,
    Name: "Nike Blazer Mid",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$110",
    Image: Shoe3,
  },

  "Nike-Air-Zoom": {
    ID: 3,
    Name: "Nike Air Zoom",
    Description: "Men's Shoe",
    Color: "1 Color",
    Price: "$200",
    Image: Shoe4,
  },

  "Nike-Air-Max": {
    ID: 4,
    Name: "Nike Air Max",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$160",
    Image: Shoe5,
  },

  "Nike-Go-FlyEase": {
    ID: 5,
    Name: "Nike Go FlyEase",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$120",
    Image: Shoe6,
  },

  "Nike-SB-Zoom-Blazer": {
    ID: 6,
    Name: "Nike SB Zoom Blazer",
    Description: "Men's Shoe",
    Color: "1 Color",
    Price: "$80",
    Image: Shoe7,
  },

  "Nike-Air-Max-Plus": {
    ID: 7,
    Name: "Nike Air Max Plus",
    Description: "Men's Shoe",
    Color: "2 Color",
    Price: "$170",
    Image: Shoe8,
  },

  "Nike-Pegasus-Trail": {
    ID: 8,
    Name: "Nike Pegasus Trail",
    Description: "Men's Shoe",
    Color: "3 Color",
    Price: "$120",
    Image: Shoe9,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  MainGrid: {
    paddingRight: "2%",
    paddingLeft: "2%",
  },
  Image: {
    maxWidth: "100%",
    minHeight: "100%",
  },
  Link: {
    textDecoration: "none",
  },
  Paper: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div>
      <p className="HeadingFont">Products</p>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.MainGrid}>
          {Object.keys(ShoesData).map((Name, ind) => {
            const Shoes = ShoesData[Name];
            return (
              <Grid key={ind} item xs={6} sm={4} md={4}>
                <Link
                  className={classes.Link}
                  key={Name}
                  to={`/Products/${Name}`}
                >
                  <Paper elevation={0} className={classes.Paper}>
                    <img
                      className={classes.Image}
                      src={Shoes.Image}
                      alt={Shoes.Name}
                    />
                  </Paper>
                  <Typography color="textPrimary">{Shoes.Name}</Typography>
                  <Typography color="textSecondary">
                    {Shoes.Description}
                  </Typography>
                  <Typography color="textSecondary">{Shoes.Color}</Typography>
                  <Typography color="textPrimary">{Shoes.Price}</Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
