import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Tooltip } from "@mui/material";
import axios from "axios";

const theme = createTheme();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignUp() {
  const [error, setError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const navigate = useNavigate();

  const handleCloseSuccess = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    navigate("/login");
  };

  const handleCloseError = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const name = data.get("name");
      const email = data.get("email");
      const gender = data.get("gender");
      const dob = data.get("dob");
      const address = data.get("address");
      const password = data.get("password");
      const passwordCheck = data.get("passwordCheck");
      const newUser = {
        name,
        email,
        gender,
        dob,
        address,
        password,
        passwordCheck,
      };
      const result = await axios.post(
        "http://localhost:5000/users/register",
        newUser
      );
      setOpenSuccess(true);
    } catch (err) {
      console.log("err", err);
      err.response.data.msg && setError(err.response.data.msg);
      setOpenError(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ boxShadow: "2px 2px 5px grey" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px 10px 8px 10px",
              marginTop: "25px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="gender"
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    select
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="dob"
                    type="date"
                    id="outlined-helperText"
                    helperText="Date of Birth"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Tooltip
                    title="Must contain at least one number and one symbol and one
                      uppercase and lowercase letter, and at least 8 or more
                      characters"
                  >
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                    />
                  </Tooltip>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="passwordCheck"
                    label="Confirm Password"
                    type="password"
                    id="passwordCheck"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleCloseSuccess}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Registration successful, redirecting...
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleCloseError}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
