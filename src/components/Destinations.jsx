import React from "react";

const Destinations = () => {
  return (
    <>
      <div className="mb-[50px] px-6 md:px-26">
        {/* Header */}
        <div className="flex justify-between items-center mb-[40px]">
          <h2 className="text-xl md:text-2xl font-bold text-[#05073c]">
            Trending Destinations
          </h2>
          <p className="text-[#05073c] text-sm md:text-base hover:cursor-pointer">
            See all
          </p>
        </div>

        {/* Container for boxes */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-7">
          {/* Destination Cards */}
          {[
            { src: "/Bali.png", alt: "Bali" },
            { src: "/Roma.png", alt: "Roma" },
            { src: "/Phuket.png", alt: "Phuket" },
            { src: "/Paris.png", alt: "Paris" },
            { src: "/Bangkok.png", alt: "Bangkok" },
          ].map((item, index) => (
            <div
              key={index}
              className="h-[180px] w-[140px] sm:h-[200px] sm:w-[150px] md:h-[215px] md:w-[160px] flex flex-col justify-center items-center rounded-lg overflow-hidden hover:cursor-pointer shadow-sm"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
