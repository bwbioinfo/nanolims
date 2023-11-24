// Desc: MUI theme

import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors';

export const defaultTheme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: "#303030",
            paper: "#424242",
        },
    },
  });

