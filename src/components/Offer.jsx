import React from "react";

const Offer = () => {
  return (
    <>
      <div className="max-w-[1100px] mx-auto mb-[100px] rounded-lg overflow-hidden -mt-[40px] relative px-6">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#fafafe]">
          {/* Text Section */}
          <div className="mt-10 md:mt-40 md:ml-10 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-[#05073c]">
              Grab upto <span className="text-[#4a43c4]">35% off</span> <br />
              on your favourite Destination
            </h1>

            <p className="text-[#05073c] mt-3 text-sm md:text-base">
              Limited time offer, don't miss the opportunity
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-[#4a43c4] text-white w-[120px] h-[50px] rounded-2xl hover:cursor-pointer">
                Book Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-[url('/sitting_girl.svg')] bg-cover bg-center w-full h-[300px] md:w-[550px] md:h-[530px]" />
        </div>
      </div>
    </>
  );
};

export default Offer;
