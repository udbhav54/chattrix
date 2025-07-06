import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { CameraAlt as CameraAltIcon, Gradient } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
// import { useInputValidation, useStrongPassword } from "6pp";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  // const [isLogin, setIsLogin] = React.useState(true); in this way we use recat component
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  // const password = useStrongPassword();
  const password = useInputValidation();

  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        // backgroundImage:"linear-gradient(rgb(255, 225, 209), rgb(249, 159, 159))",
        // backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        minHeight: "100vh",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 4,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(7px)",
          }}
        >
          {isLogin ? (
            // login
            <>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                Login
              </Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleLogin}
              >
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                    background:
                      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    boxShadow: "0 4px 14px 0 rgba(118,75,162,0.39)",
                    ":hover": {
                      background:
                        "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
                    },
                  }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button fullWidth variant="text" onClick={toggleLogin}>
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            // register
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                      boxShadow: "0 4px 20px 0 rgba(118,75,162,0.25)",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />
                      <VisuallyHiddenInput
                        type="file"
                        onChange={avatar.changeHandler}
                      />
                    </>
                  </IconButton>
                </Stack>
                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                />
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                />

                {username.error && (
                  <Typography color="error" variant="caption">
                    {username.error}
                  </Typography>
                )}

                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />

                {/* {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )} */}

                <Button
                  sx={{
                    marginTop: "1rem",
                    background:
                      "linear-gradient(90deg, #ff5858 0%, #f09819 100%)", // Vibrant pink-orange
                    color: "#fff",
                    fontWeight: "bold",
                    boxShadow: "0 4px 14px 0 rgba(255,88,88,0.25)",
                    ":hover": {
                      background:
                        "linear-gradient(90deg, #f09819 0%, #ff5858 100%)",
                    },
                  }}
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Sign up
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button fullWidth variant="text" onClick={toggleLogin}>
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
