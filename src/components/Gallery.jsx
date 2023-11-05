import React from "react";
import DraggableArea from "./DraggableArea";

const Gallery = () => {
  return (
    // the section contains the draggable area
    <section className="w-full max-w-5xl pb-10 bg-white rounded-lg shadow-2xl">
      <DraggableArea />
    </section>
  );
};

export default Gallery;
