import React from "react";
import Logo from "./Logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  makeStyles,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  AppBar: {
    backgroundColor: "#F5F5F5",
    boxShadow: "none",
    color: "black",
    paddingBottom: "none",
  },
  MenuButton: {
    marginRight: 0,
    color: "black",
  },
  Button: {
    textDecoration: "none",
    color: "black",
    textTransform: "uppercase",
  },
  ContactButton: {
    paddingRight: "20px",
    marginTop: "2.5px",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Header() {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.MenuButton}
                color="inherit"
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <Link to="/" className={classes.Button}>
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                </Link>
                <Link to="/Products" className={classes.Button}>
                  <MenuItem onClick={handleClose}>Products</MenuItem>
                </Link>
                <Link to="/About" className={classes.Button}>
                  <MenuItem onClick={handleClose}>About</MenuItem>
                </Link>
                <Link to="/Contact" className={classes.Button}>
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Link>
              </Menu>
            </>
          ) : (
            <div>
              <Link to="/" className={classes.Button}>
                <Button>HOME</Button>
              </Link>
              <Link to="/Products" className={classes.Button}>
                <Button>PRODUCTS</Button>
              </Link>
              <Link to="/About" className={classes.Button}>
                <Button>ABOUT</Button>
              </Link>
            </div>
          )}
          <Grid className={classes.title}>
            <Link to="/">
              <Button disableRipple style={{ backgroundColor: "transparent" }}>
                <img style={{ maxWidth: 60 }} src={Logo} alt="Nike"></img>
              </Button>
            </Link>
          </Grid>
          {isMobile ? (
            <>
              <Typography></Typography>
            </>
          ) : (
            <Link to="/Contact" className={classes.ContactButton}>
              <Button>CONTACT</Button>
            </Link>
          )}
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <ShoppingBasket style={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
