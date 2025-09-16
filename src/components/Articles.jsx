import React from "react";

const Articles = () => {
  return (
    <>
      <div className="mb-8 px-4 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#05073c] text-center md:text-left">
            Travel Articles
          </h2>
          <p className="text-[#05073c] mt-2 md:mt-0 hover:cursor-pointer">
            See all
          </p>
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* First Article */}
          <div className="flex flex-col gap-3 max-w-[300px] w-full">
            <div className="h-[210px] rounded-lg overflow-hidden">
              <img
                src="/Articles_1.png"
                alt="Tour Card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#717171]">
                April 06 2023 <span className="ml-2">| By Ali Tufan</span>
              </div>
              <div className="text-[14px] md:text-base font-semibold text-[#05073c]">
                Kenya vs Tanzania Safari: The Better African Safari Experience
              </div>
            </div>
          </div>

          {/* Second Article */}
          <div className="flex flex-col gap-3 max-w-[300px] w-full">
            <div className="h-[210px] rounded-lg overflow-hidden">
              <img
                src="/Articles_2.png"
                alt="Tour Card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#717171]">
                April 07 2023 <span className="ml-2">| By Emily Johnson</span>
              </div>
              <div className="text-[14px] md:text-base font-semibold text-[#05073c]">
                Exploring the Serengeti: A Wildlife Adventure
              </div>
            </div>
          </div>

          {/* Third Article */}
          <div className="flex flex-col gap-3 max-w-[300px] w-full">
            <div className="h-[210px] rounded-lg overflow-hidden">
              <img
                src="/Articles_3.png"
                alt="Tour Card"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#717171]">
                April 08 2023 <span className="ml-2">| By Maxwell Rhodes</span>
              </div>
              <div className="text-[14px] md:text-base font-semibold text-[#05073c]">
                Into the Wild: An Unforgettable Safari Journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
