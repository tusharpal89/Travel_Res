import React from "react";

export default function Subscribe() {
  return (
    <div className="max-w-6xl mx-auto my-8 px-4 md:px-6 ">
      {/* card */}
      <div className="relative rounded-2xl h-auto md:h-[530px] overflow-hidden flex flex-col md:flex-row items-center md:items-stretch">
        {/* Background image */}
        <img
          src="/Subscribe_Full_bgc.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* LEFT: text + input */}
        <div className="relative flex-1 px-6 md:px-12 py-10 md:py-16 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Subscribe To Our Mailing
            <br />
            List And Stay Up To Date
          </h2>
          <p className="text-sm md:text-base text-[#bfc3e6] max-w-xl mx-auto md:mx-0 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="w-full max-w-md mx-auto md:mx-0 bg-[#0e1333] rounded-xl p-2 md:p-3 flex flex-col sm:flex-row items-center shadow-inner">
            <input
              className="flex-1 w-full bg-transparent outline-none placeholder:text-[#9aa0c8] text-white px-4 py-2 sm:py-3"
              placeholder="Your email"
            />
            <button className="mt-3 sm:mt-0 sm:ml-4 px-5 py-2 sm:py-3 rounded-lg bg-[#5a4bff] text-white hover:cursor-pointer w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
