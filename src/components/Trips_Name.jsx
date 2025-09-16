import React from "react";

const Trips_Name = () => {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start px-6 md:ml-[150px]">
        {/* First-Box */}
        <div className="mb-[40px] h-auto w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg">
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

        {/* Second-Box */}
        <div className="mb-[40px] h-auto w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg">
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

        {/* Third-Box */}
        <div className="mb-[40px] h-auto w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg">
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

        {/* Fourth-Box */}
        <div className="mb-[40px] h-auto w-full sm:w-[48%] md:w-[220px] flex flex-col gap-2 rounded-lg">
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
    </>
  );
};

export default Trips_Name;
