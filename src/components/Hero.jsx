import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-end gap-6 relative bg-[#effafb] p-4 md:p-0 md:-mt-10">
        {/* LEFT SECTION */}
        <div className="mt-6 md:mt-40 md:ml-10 z-10 flex flex-col gap-6 w-full md:w-auto">
          {/* Mobile Card 1 - Text */}
          <div className="bg-white rounded-lg shadow-md p-6 md:bg-transparent md:shadow-none md:p-0 order-1">
            <p>
              Search, compare and book 15,000+ multiday tours all over the
              world.
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold text-[#05073c] mt-3">
              Search Your Next <br />
              <span className="text-[#4a43c4]">Holiday</span>
            </h1>
          </div>

          {/* Desktop Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-4 md:bg-transparent md:shadow-none md:p-0 order-3 md:order-2">
            <div className="flex flex-wrap md:flex-nowrap bg-white h-auto md:h-16 rounded-3xl overflow-hidden w-full md:w-[600px]">
              {/* section-1 */}
              <div className="flex items-center gap-2 p-2 w-1/2 md:w-[237px]">
                <div className="bg-[#f9f9f9] h-10 w-12 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-[#05073c] text-[12px]">Where</span>
                  <span className="text-[#717171] text-[10px]">
                    Search Destination
                  </span>
                </div>
              </div>
              {/* section-2 */}
              <div className="flex items-center gap-2 p-2 w-1/2 md:w-[237px]">
                <div className="bg-[#f9f9f9] h-10 w-12 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-[#05073c] text-[12px]">When</span>
                  <span className="text-[#717171] text-[10px]">
                    Feb 05 ~ Mar 14
                  </span>
                </div>
              </div>
              {/* section-3 */}
              <div className="flex items-center gap-2 p-2 w-1/2 md:w-[237px]">
                <div className="bg-[#f9f9f9] h-10 w-12 rounded-full"></div>
                <div className="flex flex-col">
                  <span className="text-[#05073c] text-[12px]">Tour Type</span>
                  <span className="text-[#717171] text-[10px]">All tour</span>
                </div>
              </div>
              {/* section-4 */}
              <div className="flex items-center justify-center p-2 w-1/2 md:w-[237px]">
                <button className="text-white bg-[#4a43c4] h-[45px] w-[105px] rounded-3xl">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative bg-white rounded-lg shadow-md p-2 md:bg-transparent md:shadow-none md:p-0 order-2 md:order-1 md:mt-0 mt-6">
          <div className="bg-[url('/Couple_Frame.svg')] bg-cover bg-center w-[340px] h-[400px] md:w-[450px] md:h-[530px] relative">
            <img src="" alt="" className="absolute h-full left-0 top-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
