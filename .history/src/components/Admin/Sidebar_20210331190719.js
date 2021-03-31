import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";

function Sidebar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Billing</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Settings</ListItemText>
      </ListItem>
    </List>
  );
}

export default Sidebar;
