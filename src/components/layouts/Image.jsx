import React from "react";

const Image = ({ isDragging, src, alt }) => {
  return (
    <div>
      <picture>
        <img
          className={`object-cover w-full h-full bg-white ${
            // when the image is dragging the image will be invisible only the border will be  visible
            isDragging ? "invisible" : "visible"
          } 
            }`}
          src={src}
          alt={alt}
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Image;
