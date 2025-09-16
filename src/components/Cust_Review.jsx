import React from "react";

const Cust_Review = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#fbfbfb] py-12 px-4 md:px-8 gap-6 mb-[70px]">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-bold text-center">
          Customer Reviews
        </h2>

        {/* Quote icon */}
        <div>
          <img src="/double_quote.svg" alt="quote" className="w-6 md:w-8" />
        </div>

        {/* Review text */}
        <div className="w-full max-w-[750px]">
          <p className="text-sm md:text-base text-center text-[#05073c] leading-relaxed">
            The tours in this website are great. I had been really enjoy with my
            family! The team is very professional and taking care of the
            customers. Will surely recommend to my friend to join this company!
          </p>
        </div>

        {/* Reviewer name */}
        <div className="text-center">
          <div className="font-semibold">Ali Tufan</div>
          <div className="text-sm text-gray-500">
            Product Manager, Apple Inc.
          </div>
        </div>

        {/* Profile images */}
        <div className="flex flex-wrap justify-center gap-5 mt-4">
          {[
            "/image_7.png",
            "/image_8.png",
            "/image_9.png",
            "/image_10.png",
            "/image_11.png",
          ].map((src, i) => (
            <div
              key={i}
              className="h-[50px] w-[50px] rounded-full overflow-hidden"
            >
              <img
                src={src}
                alt={`reviewer-${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cust_Review;
