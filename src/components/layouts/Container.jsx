import React from "react";
import Gallery from "../Gallery";

const Container = () => {
  return (
    // container contains the whole website content
    <div className="grid items-center justify-center h-screen bg-[#F5F7F8]">
      <Gallery />
    </div>
  );
};

export default Container;
