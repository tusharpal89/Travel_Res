import React from "react";

const Trips = () => {
  return (
    <>
      <div className="mb-[60px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-[40px] px-6 md:px-[150px]">
          <div className="text-2xl font-bold text-[#05073c] mt-[20px] md:mt-[30px] text-center md:text-left">
            Featured Trips
          </div>

          <div className="text-[#05073c] mt-[20px] md:mt-[30px] ring-1 py-2 px-4 rounded-md ring-[#e7e6e6] hover:cursor-pointer">
            <p>By Travel Style</p>
          </div>
        </div>

        {/* Container for Trip Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 px-6 md:px-[150px]">
          {/* Trip 1 */}
          <div className="w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg overflow-hidden mb-[40px]">
            <div className="h-[210px] w-full rounded-lg overflow-hidden">
              <img
                src="/div.tourCard__image.svg"
                alt="Tour 1"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-[10px] text-[#717171]">Paris, France</div>
            <div className="text-[14px] font-semibold text-[#05073c]">
              Centipede Tour - Guided Arizona <br /> Desert Tour by ATV
            </div>
            <div className="text-[13px] text-[#05073c]">4.8 ( 243 )</div>
            <hr className="w-full md:w-[220px]" />
            <div className="flex justify-between text-[14px] text-[#05073c]">
              <div>4 Days</div>
              <div>
                From <span className="font-semibold">$189.25</span>
              </div>
            </div>
          </div>

          {/* Trip 2 */}
          <div className="w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg overflow-hidden mb-[40px]">
            <div className="h-[210px] w-full rounded-lg overflow-hidden">
              <img
                src="/div.tourCard__image1.svg"
                alt="Tour 2"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-[10px] text-[#717171]">New York, USA</div>
            <div className="text-[14px] font-semibold text-[#05073c]">
              Molokini and Turtle Town Snorkeling Adventure Abroad
            </div>
            <div className="text-[13px] text-[#05073c]">4.8 ( 243 )</div>
            <hr className="w-full md:w-[220px]" />
            <div className="flex justify-between text-[14px] text-[#05073c]">
              <div>4 Days</div>
              <div>
                From <span className="font-semibold">$225</span>
              </div>
            </div>
          </div>

          {/* Trip 3 */}
          <div className="w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg overflow-hidden mb-[40px]">
            <div className="h-[210px] w-full rounded-lg overflow-hidden">
              <img
                src="/div.tourCard__image2.svg"
                alt="Tour 3"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-[10px] text-[#717171]">London, UK</div>
            <div className="text-[14px] font-semibold text-[#05073c]">
              Westminster Walking Tour & <br /> Westminster Abbey Entry
            </div>
            <div className="text-[13px] text-[#05073c]">4.8 ( 243 )</div>
            <hr className="w-full md:w-[220px]" />
            <div className="flex justify-between text-[14px] text-[#05073c]">
              <div>4 Days</div>
              <div>
                From <span className="font-semibold">$943</span>
              </div>
            </div>
          </div>

          {/* Trip 4 */}
          <div className="w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg overflow-hidden mb-[40px]">
            <div className="h-[210px] w-full rounded-lg overflow-hidden">
              <img
                src="/div.tourCard__image3.svg"
                alt="Tour 4"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-[10px] text-[#717171]">New York, USA</div>
            <div className="text-[14px] font-semibold text-[#05073c]">
              All Inclusive Ultimate Circle Island Day Tour with Lunch
            </div>
            <div className="text-[13px] text-[#05073c]">4.8 ( 243 )</div>
            <hr className="w-full md:w-[220px]" />
            <div className="flex justify-between text-[14px] text-[#05073c]">
              <div>4 Days</div>
              <div>
                From <span className="font-semibold">$771</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trips;
