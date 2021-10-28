import React, { useContext } from "react";
import { Container } from "@mui/material";
import Images from "./Images";
import { AppContext } from "../../App";

const ImageCarousel = () => {
  const { imagesCount } = useContext(AppContext);

  return (
    <div className="img-carousel-comp">
      <Container
        sx={{  padding: "1rem 0" }}
        maxWidth="lg"
      >
        <Images
          data={{
            wrapperClass: "carousel-item",
            count: imagesCount,
          }}
        />
      </Container>
    </div>
  );
};

export default ImageCarousel;
