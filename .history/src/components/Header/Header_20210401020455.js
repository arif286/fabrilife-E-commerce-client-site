import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/fabrilife.svg";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    color: 'white'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <img
            style={{ width: "80px", marginLeft: "30px" }}
            src={logo}
            alt=""
          />
          {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
          <Typography variant="h6" className={classes.title}></Typography>
          <NavLink className="header-link" to="/home">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink className="header-link" to="/home">
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink className="header-link" to="/order">
            <Button color="inherit">Order</Button>
          </NavLink>
          <NavLink className="header-link" to="/admin">
            <Button color="inherit">Admin</Button>
          </NavLink>
          <NavLink className="header-link" to="/login">
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
