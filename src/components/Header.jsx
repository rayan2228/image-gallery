import React from "react";

const Header = ({
  selectedImagesLength,
  handleSelectAll,
  handleDeleteImages,
}) => {
  return (
    <div className="flex items-center px-3 py-6 mb-3 capitalize border-b sm:px-10 ">
      <h2 className="flex items-center w-1/2 text-lg font-semibold sm:text-2xl">
        {/* show how many images are selected */}
        {selectedImagesLength !== 0 && (
          <input
            type="checkbox"
            className={`sm:w-6 sm:h-6 w-5 h-5 text-blue-600 border-none rounded cursor-pointer outline-transparent mr-4`}
            // checked={true}
            onChange={handleSelectAll}
          />
        )}
        {selectedImagesLength
          ? `${selectedImagesLength} files selected`
          : "Gallery"}
      </h2>
      {/* show delete files when an image is selected */}
      {selectedImagesLength != 0 && (
        <span
          className="w-1/2 font-medium text-red-600 cursor-pointer text-end hover:underline"
          onClick={handleDeleteImages}
        >
          delete files
        </span>
      )}
    </div>
  );
};

export default Header;
