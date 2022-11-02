import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AuthOptions from "../Auth/AuthOptions";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import PassengerProfile from "../PassengerProfile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  AppBar: {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#4287f5",
    },
  },
  Drawer: {
    "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
      backgroundColor: "#4287f5",
    },
  },
}));

const ManagerSideNavBar = ({ user }) => {
  const styles = useStyles();
  const [page, setPage] = React.useState(2);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div className={styles.AppBar}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 15px 10px 15px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <h1 style={{ letterSpacing: "0.1em" }}>Easy Going</h1>
            </Link>
            <AuthOptions />
          </div>
        </AppBar>
      </div>
      <div className={styles.Drawer}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
            backgroundColor: "#4287f5",
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", paddingTop: "10px" }}>
            <List>
              {["Home", "Dashboard", "View Shedules", "View Buses", "View Inspectors"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText
                      primary={text}
                      style={{
                        padding: "5px 0px 10px 0px",
                        borderBottom: "1px solid",
                        fontWeight: "bold",
                      }}
                      onClick={() => setPage(index + 1)}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {page === 1 ? (
          <h1>Home</h1>
        ) : page === 2 ? (
          <PassengerProfile user={user} />
        ) : (
          <h1>Recharge</h1>
        )}
      </Box>
    </Box>
  );
};

export default ManagerSideNavBar;
