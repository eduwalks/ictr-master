import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// import {
//   AppBar,
//   CssBaseline,
//   Typography,
//   createMuiTheme
// } from "@material-ui/core";

const theme = createTheme({
  palette: {
    mode: "dark",
  }
});

const Test = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      11
    </ThemeProvider>
  );
};

export default Test;
