import { Button, IconButton, Tooltip } from "@material-ui/core";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const useStyles = makeStyles((theme) => ({
  icon: {
    "& .css-tzssek-MuiSvgIcon-root": {
      fill: "black",
    },
  },
}));

function AuthOptions() {
  const styles = useStyles();
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  
  const register = () => navigate("/register");
  
  const login = () => navigate("/login");
  
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };
  return (
    <nav className="auth-options">
      {userData.user ? (
        <Button
          style={{
            padding: "15px",
            borderRadius: "8px",
            width: "100px",
            fontSize: "16px",
          }}
          onClick={logout}
        >
          Logout
        </Button>
      ) : (
          <>
            <Tooltip title="Login">
            <IconButton
              aria-label="Login"
              onClick={login}
              className={styles.icon}
          >
            <AccountCircleIcon fontSize="large"/>
              </IconButton>
              </Tooltip>
        </>
      )}
    </nav>
  );
}
export default AuthOptions;
