// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Header.css";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   navbar: {
//     backgroundColor: "#5c6bc0",
//   },
//   button: {
//     backgroundColor: "#81d4fa",
//     marginRight: "6px",
//   },
// }));
// const Header = () => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       <AppBar className={classes.navbar} position="static">
//         <Toolbar>
//           <img
//             style={{ width: "80px", marginLeft: "30px" }}
//             src={logo}
//             alt=""
//           />
//           <Typography variant="h6" className={classes.title}></Typography>
//           <NavLink className="header-link" to="/home">
//             <Button className={classes.button}>Home</Button>
//           </NavLink>
//           <NavLink className="header-link" to="/order">
//             <Button className={classes.button}>Order</Button>
//           </NavLink>
//           <NavLink className="header-link" to="/admin">
//             <Button className={classes.button}>Admin</Button>
//           </NavLink>
//           <NavLink className="header-link" to="/login">
//             <Button className={classes.button}>Login</Button>
//           </NavLink>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };
// export default Header;
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Link,
  makeStyles,
  MenuItem,
  Toolbar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../tshirt-shop/logos/fabrilife.svg";

const headersData = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "order",
    href: "/order",
  },
  {
    label: "Admin",
    href: "/admin",
  },
  {
    label: "Login",
    href: "/login",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#5c6bc0",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {headerLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{headerLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const headerLogo = (
    <img style={{ width: "80px", marginLeft: "30px" }} src={logo} alt="" />
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
