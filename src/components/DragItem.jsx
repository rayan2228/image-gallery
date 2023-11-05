import React, { forwardRef, useEffect } from "react";
import Image from "./layouts/Image";
import ImageOverlay from "./layouts/ImageOverlay";
const DragItem = forwardRef(
  (
    {
      src,
      alt,
      index,
      selectColor,
      onChangeFun,
      faded,
      checked,
      style,
      isDragging,
      overlay,
      ...props
    },
    ref
  ) => {
    // some initial CSS
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      ...style,
    };

    useEffect(() => {
      const handleCheckboxMouseDown = (event) => {
        // Prevent drag behavior when interacting with the checkbox
        event.stopPropagation();
      };
      // Attach the event listener when the component mounts
      const checkbox = document.getElementById(`id${index}`);
      // calling event on mouse down and touch start
      checkbox.addEventListener("mousedown", handleCheckboxMouseDown);
      checkbox.addEventListener("touchstart", handleCheckboxMouseDown);
      // Clean up the event listener when the component <unmounts></unmounts>
      return () => {
        checkbox.removeEventListener("mousedown", handleCheckboxMouseDown);
        checkbox.removeEventListener("touchstart", handleCheckboxMouseDown);
      };
    }, [index]);

    return (
      <div
        ref={ref}
        style={inlineStyles}
        {...props}
        className="relative overflow-hidden border-4 rounded-lg cursor-move group first:col-span-2 first:row-span-2 first:w-full first:h-full "
      >
        {/* call image layout and passing props */}
        <Image isDragging={isDragging} src={src} alt={alt} />
        {/* call image overlay and passing props */}
        <ImageOverlay
          selectColor={selectColor}
          isDragging={isDragging}
          index={index}
          overlay={overlay}
          checked={checked}
          onChangeFun={onChangeFun}
        />
      </div>
    );
  }
);
export default DragItem;
