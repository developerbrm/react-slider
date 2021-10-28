import "./css/app.css";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AppBar, TextField, Typography } from "@mui/material";
import ImageGrid from "./css/components/ImageGrid";
import ImageCarousel from "./css/components/ImageCarousel";
export const AppContext = React.createContext();

const useStyles = makeStyles({});

const myTheme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const classes = useStyles();

  const [imagesCount, setImagesCount] = useState(3);

  return (
    <AppContext.Provider value={{ imagesCount, setImagesCount }}>
      <ThemeProvider theme={myTheme}>
        <AppBar elevation={2} position="sticky" sx={{ background: "#14213d" }}>
          <Typography
            variant="h4"
            sx={{ color: "#e5e5e5", margin: ".25em auto" }}
            fontWeight="normal"
            align="center"
          >
            Image Carousel
          </Typography>
        </AppBar>

        <ImageCarousel />
        <ImageGrid />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
