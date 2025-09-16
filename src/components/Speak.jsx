import React from "react";

const Speak = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center mb-[100px] gap-4 md:gap-16 px-4 text-center md:text-left">
        <div className="text-[16px] font-semibold text-[#05073c]">
          Speak to our expert at{" "}
          <span className="text-[#5a4bff]">1-800-453-6744</span>
        </div>
        <div className="text-[16px] font-semibold text-[#05073c]">
          Follow Us
        </div>
      </div>
    </>
  );
};

export default Speak;
