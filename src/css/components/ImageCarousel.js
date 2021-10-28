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

  const handleImagesCountChange = (e) => {
    const { value } = e.target;

    if (Number(value) <= 0) return;

    setImagesCount(() => Number(value));
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
  }, [counter]);

  useEffect(() => {
    setCounter(() => imagesCount - 1);
  }, [imagesCount]);

  return (
    <div className="img-carousel-comp">
      <Container sx={{ margin: "1rem auto" }} maxWidth="lg">
        <div
          ref={carouselContainerRef}
          className="img-carousel-container apply-image-load-animation"
        >
          <Images
            data={{
              wrapperClass: "carousel-item",
              count: imagesCount,
              size: 1000,
            }}
          />
        </div>

        <div className="controls-group">
          <form>
            <TextField
              sx={{
                width: "10rem",
                maxWidth: "auto",
                display: "block",
              }}
              labelplacement="start"
              required
              onChange={handleImagesCountChange}
              error={imagesCount <= 2}
              value={imagesCount}
              label="Number of Images"
              variant="outlined"
              fullWidth
              type="number"
              color="secondary"
            ></TextField>
          </form>

          <ButtonGroup
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
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
        </div>
      </Container>
    </div>
  );
};

export default ImageCarousel;
