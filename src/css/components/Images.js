import React from "react";
import uniqid from "uniqid";

const Images = ({ data }) => {
  const { wrapperClass, count } = data;

  return [...Array(count)].map((_, index) => (
    <div className={wrapperClass} id={uniqid()} key={uniqid()}>
      <img
        src={`https://loremflickr.com/${700 + index}/${700 + index}/car`}
        alt={`grid-img-${index}`}
      />
    </div>
  ));
};

export default Images;
