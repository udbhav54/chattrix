import { useInputValidation } from "6pp";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { bgGradient } from "../../constants/color";
import { Navigate } from "react-router-dom";


const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };


  if(isAdmin) return <Navigate to="/admin/dashboard" />
  return (
    <div
      style={{
        backgroundImage: bgGradient,
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
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Admin Login
          </Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="Secret Key"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />

            <Button
              sx={{
                marginTop: "1rem",
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
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
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
