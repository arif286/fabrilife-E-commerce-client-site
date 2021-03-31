import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <NavLink to='/pat'>
        <List disablePadding dense>
          {items.map(({ label, name, ...rest }) => (
            <ListItem key={name} button {...rest}>
              <ListItemText>{label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </NavLink>
    </div>
  );
}

export default Sidebar;
