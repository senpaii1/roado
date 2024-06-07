import React, { ReactNode, useState } from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Logo from "../Group.png";
import TodayHighlight from "./Today'sHighlight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7.5)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(1, 1),
  ...theme.mixins.toolbar,
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          width: `calc(100% - ${open ? drawerWidth : 60}px)`,
          // width: 60,
          transition: "width 0.3s",
        }}
      ></AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 60,
          // width: 60,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
        }}
        open={open}
      >
        <DrawerHeader>
          <img src={Logo} alt="Logo" style={{ marginRight: "10px" }} />
        </DrawerHeader>
        <List>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>
          {/* Additional icons */}
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Inbox" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Mail" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Inbox" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Mail" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Inbox" />}
          </ListItem>
          <ListItem
            button
            component={Link}
            sx={{ marginBottom: "80px" }}
            to="/"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Mail" />}
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#F7FAFF",
          padding: "40px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>

      <Box
        sx={{
          width: "30%",
          padding: "0px",
        }}
      >
        <TodayHighlight />
      </Box>
    </Box>
  );
};

export default Layout;
