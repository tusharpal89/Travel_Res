import React from "react";

const Main_Sec_Sec = () => {
  return (
    <>
      <div className="mb-[50px] px-6 md:px-[150px]">
        {/* first div */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-[40px]">
          <div className="text-2xl font-bold text-[#05073c] mt-[10px] text-center md:text-left">
            Popular things to do
          </div>

          <div className="text-[#05073c] mt-[10px] md:mt-[20px]">
            <p className="hover:cursor-pointer">See all</p>
          </div>
        </div>

        {/* container for boxes */}
        <div className="flex flex-wrap justify-center gap-6 mb-[100px]">
          {/* First Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/1.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              City Tours <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>

          {/* Second Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/2.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              Cultural Tours <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>

          {/* Third Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/3.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              Day Cruises <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>

          {/* Fourth Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/4.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              Bus Tours <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>

          {/* Fifth Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/5.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              Beach Tours <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>

          {/* Sixth Box */}
          <div className="bg-[#faf9fd] h-[160px] w-[140px] flex flex-col justify-center items-center gap-2 rounded-lg hover:cursor-pointer">
            <div className="bg-white h-[55px] w-[55px] rounded-3xl mb-[6px] flex items-center justify-center">
              <img src="/6.svg.jpg" alt="" className="h-[35px]" />
            </div>
            <div>
              Food Tours <br />
              <span className="text-[12px]">100+ Tours</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Sec_Sec;
