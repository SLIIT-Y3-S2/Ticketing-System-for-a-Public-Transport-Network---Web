import { AppBar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AuthOptions from "../Auth/AuthOptions";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#4287f5",
    },
  },
  icon: {
    '& .css-tzssek-MuiSvgIcon-root': {
      fill:"black"
    }
  }
}));

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.AppBar}>
      <AppBar position="sticky">
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
  );
};

export default Header;
