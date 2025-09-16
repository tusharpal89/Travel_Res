import React from "react";

const Main_sec = () => {
  return (
    <>
      <div className="mt-[90px] px-6">
        {/* Heading */}
        <div className="text-center md:text-left md:ml-[530px] text-[#05073c]">
          <p>Trusted by the world's best</p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center md:justify-start gap-8 mr-2 md:gap-12 mt-[60px] mb-[110px] md:ml-[150px]">
          <img
            src="/amazon_logo.svg"
            alt="Amazon_logo"
            className="h-8  md:h-10"
          />
          <img src="/AMD_logo.svg" alt="AMD_logo" className="h-8  md:h-10" />
          <img src="/dropcam.svg" alt="dropcam" className="h-8 md:h-10" />
          <img src="/logitech.svg" alt="logitech" className="h-8 md:h-10" />
          <img src="/spotify.svg" alt="spotify" className="h-8 md:h-10" />
          <img
            src="/amazon_logo.svg"
            alt="amazon_logo"
            className="h-8 md:h-10"
          />
        </div>
      </div>
    </>
  );
};

export default Main_sec;
