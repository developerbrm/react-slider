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
    <AppContext.Provider value={{ imagesCount }}>
      <ThemeProvider theme={myTheme}>
        <AppBar elevation={2} position="sticky" sx={{ background: "#14213d" }}>
          <Typography
            variant="h2"
            sx={{ color: "#e5e5e5", margin: ".25em auto" }}
            fontWeight="normal"
            align="center"
          >
            Image Carousel
          </Typography>
        </AppBar>

        <form>
          <TextField
            sx={{
              width: "15rem",
              margin: "2rem auto",
              maxWidth: "auto",
              display: "block",
            }}
            labelPlacement="start"
            required
            onChange={(e) => setImagesCount(() => Number(e.target.value))}
            error={imagesCount === 0}
            value={imagesCount}
            label="Number of Images"
            variant="filled"
            fullWidth
            color="secondary"
          ></TextField>
        </form>

        <ImageCarousel />
        <ImageGrid />
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
