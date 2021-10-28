import React, { useContext, useState, useRef, useEffect } from "react";
import { Button, ButtonGroup, Container, TextField } from "@mui/material";
import Images from "./Images";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { AppContext } from "../../App";

const ImageCarousel = () => {
  const { imagesCount, setImagesCount } = useContext(AppContext);
  const [counter, setCounter] = useState(0);
  const carouselContainerRef = useRef(null);

  const handleControlClick = (e) => {
    const { id } = e.target.closest("button");
    id === "next"
      ? setCounter((count) => count + 1)
      : setCounter((count) => count - 1);
  };

  useEffect(() => {
    const allCarouselItems = [...carouselContainerRef.current.childNodes];

    allCarouselItems?.forEach((currentItem, index, allItems) => {
      const currentPosition = Math.abs(counter) % allItems.length;

      if (index === currentPosition) {
        currentItem.classList.add("display-in");
      } else {
        currentItem.classList.remove("display-in");
      }
    });
  }, [counter, imagesCount]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [imagesCount])

  return (
    <div className="img-carousel-comp">
      <Container sx={{ padding: "1rem 0" }} maxWidth="lg">
        <div ref={carouselContainerRef} className="img-carousel-container">
          <Images
            data={{
              wrapperClass: "carousel-item",
              count: imagesCount,
              size: 1000,
            }}
          />
        </div>

        <ButtonGroup
          sx={{ display: "flex", justifyContent: "center", margin: "1em auto" }}
          variant="outlined"
          color="secondary"
          aria-label="slider-controls"
        >
          <Button id="previous" onClick={handleControlClick}>
            <ChevronLeft />
          </Button>
          <Button id="next" onClick={handleControlClick}>
            <ChevronRight />
          </Button>
        </ButtonGroup>

        <form>
          <TextField
            sx={{
              width: "15rem",
              margin: "1rem auto",
              maxWidth: "auto",
              display: "block",
            }}
            labelplacement="start"
            required
            onChange={(e) => setImagesCount(() => Number(e.target.value))}
            error={imagesCount <= 2}
            value={imagesCount}
            label="Number of Images"
            variant="filled"
            fullWidth
            type="number"
            color="secondary"
          ></TextField>
        </form>
      </Container>
    </div>
  );
};

export default ImageCarousel;
