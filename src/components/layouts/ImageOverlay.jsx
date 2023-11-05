import React from "react";

const ImageOverlay = ({
  selectColor,
  isDragging,
  index,
  onChangeFun,
  overlay,
  checked,
}) => {
  return (
    <label
      className={` group-hover:visible group-hover:opacity-100 absolute top-0 left-0 w-full h-full transition-all ${selectColor}  ${
        isDragging ? "hidden" : "block"
      } `}
    >
      <input
        type="checkbox"
        className={`sm:w-6 sm:h-6 w-5 h-5 text-blue-600 translate-x-4 translate-y-4 border-none rounded cursor-pointer outline-transparent
        ${
          // when the image is dragging the checkbox will be invisible
          overlay ? "invisible" : "visible"
        } `}
        value={index}
        onChange={onChangeFun}
        checked={checked}
        id={`id${index}`}
      />
    </label>
  );
};

export default ImageOverlay;
