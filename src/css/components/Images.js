import React from "react";
import uniqid from "uniqid";

const Images = ({ data }) => {
  const { wrapperClass, count, size } = data;

  return [...Array(count)].map((_, index) => (
    <div className={wrapperClass} id={uniqid()} key={uniqid()}>
      <img
        className="apply-image-load-animation "
        src={`https://loremflickr.com/${size + index}/${size + index}/car`}
        alt={`grid-img-${index}`}
        height="100px"
        width="100px"
      />
    </div>
  ));
};

export default Images;
