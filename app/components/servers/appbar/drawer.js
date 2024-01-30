import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";

export default function DrawerComponent({ username, handleLogout }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const handleToggleDrawer = () => setOpenDrawer(!openDrawer);

  const handleClick = () => {
    handleCloseDrawer();
    handleLogout();
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <Typography variant="h6" paddingTop={2} paddingX={3} component="p">
          Welcome
        </Typography>
        <Typography variant="h6" align="center" component="p" gutterBottom>
          {username}
        </Typography>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon className="drawer-list">
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton className="mg-left" onClick={handleToggleDrawer}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}
