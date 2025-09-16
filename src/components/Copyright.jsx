import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-20 mb-[30px] px-6 md:px-20">
        {/* copywrite Div Here !! */}
        <div className="text-[#05073c] text-sm md:text-base text-center md:text-left">
          <p>&copy; Copyright Viatours 2024</p>
        </div>

        {/* Bank icons Div Here !! */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <img src="/footer1.png" alt="visa" className="h-6 md:h-8" />
          <img src="/footer2.png" alt="2-circle-sign" className="h-6 md:h-8" />
          <img src="/footer3.png" alt="Apple-pay" className="h-6 md:h-8" />
          <img src="/footer4.png" alt="Discover" className="h-6 md:h-8" />
          <img src="/footer5.png" alt="Paytm" className="h-6 md:h-8" />
          <img src="/footer6.png" alt="Amex" className="h-6 md:h-8" />
        </div>
      </div>
    </>
  );
};

export default Copyright;
