import { Container } from "@mui/material";
import React, { useContext } from "react";
import Images from "./Images";
import { AppContext } from "../../App";

const ImageGrid = () => {
  const { imagesCount } = useContext(AppContext);

  return (
    <div className="image-grid-comp">
      <Container sx={{ margin: "1rem auto" }} maxWidth="lg">
        <div className="image-grid-container">
          <Images
            data={{
              wrapperClass: "grid-item",
              count: imagesCount,
              size: 1000,
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default ImageGrid;
