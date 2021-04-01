import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../tshirt-shop/logos/fabrilife.svg";
import "./Header.css";



const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4fc3f7",
    },
  },
});
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
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#5c6bc0",
    marginRight: "6px",
  },
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
          <Typography variant="h6" className={classes.title}></Typography>
          <NavLink className="header-link" to="/home">
            <Button className={classes.button}>Home</Button>
          </NavLink>
          <NavLink className="header-link" to="/order">
            <Button className={classes.button}>Order</Button>
          </NavLink>
          <NavLink className="header-link" to="/admin">
            <Button className={classes.button}>Admin</Button>
          </NavLink>
          <NavLink className="header-link" to="/login">
            <Button className={classes.button}>Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
