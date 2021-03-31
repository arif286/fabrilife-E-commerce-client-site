import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <List disablePadding dense>
        {items.map(({ label, name, ...rest }) => (
          <ListItem key={name} button {...rest}>
            <ListItemText>{label}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Sidebar;
