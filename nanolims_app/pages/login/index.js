import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import sideImage from "../../public/login_side.png";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@mui/material/styles";
import Copyright from "@/components/Copyright";
import Typography from "@mui/material/Typography";
import { darkTheme } from "@/styles/themes";
import { signIn } from "next-auth/react";



export default function SignInSide() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${sideImage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In With:
            </Typography>
              <Button
                onClick={() => signIn('github')}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                GitHub
              </Button>
              <Button
                onClick={() => signIn('google')}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Google
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
