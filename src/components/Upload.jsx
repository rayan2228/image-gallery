import React from "react";
import { BsImage } from "react-icons/bs";
const Upload = ({ length }) => {
  return (
    <div
      className={`
      ${
        // fix the height and width when data is empty
        length
          ? "sm:min-w-[160px] sm:min-h-[160px]"
          : "sm:min-w-[0px] sm:min-h-[0px]"
      } min-h-[160px] min-w-[160px] border-4 border-dotted rounded-lg `}
    >
      <label
        htmlFor="drop-file"
        className="flex flex-col items-center justify-center w-full h-full font-semibold capitalize cursor-pointer gap-y-4 "
      >
        <BsImage className="text-2xl" />
        <h4>add images</h4>
        <input type="file" name="gallery-img" id="drop-file" hidden />
      </label>
    </div>
  );
};

export default Upload;
