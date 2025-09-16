import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between h-auto md:h-[400px] gap-10 md:gap-16 text-[#05073c] px-6 md:px-20 py-10 md:py-16">
        {/* contact */}
        <div className="flex-1">
          <h1 className="font-semibold mb-4 text-lg">Contact</h1>
          <p className="text-[14px] mb-2">
            328 Queensberry Street, North Melbourne VIC 3051, Australia.
          </p>
          <a className="text-[14px] block" href="mailto:hi@viatours.com">
            hi@viatours.com
          </a>
        </div>

        {/* Company */}
        <div className="flex-1">
          <h1 className="font-semibold mb-4 text-lg">Company</h1>
          <div className="flex flex-col gap-2">
            <a href="#">About Us</a>
            <a href="#">Tourz Reviews</a>
            <a href="#">Contact Us</a>
            <a href="#">Travel Guides</a>
            <a href="#">Data Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Legal</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

        {/* Support */}
        <div className="flex-1">
          <h1 className="font-semibold mb-4 text-lg">Support</h1>
          <div className="flex flex-col gap-2">
            <a href="#">Get in Touch</a>
            <a href="#">Help Centre</a>
            <a href="#">Live Chat</a>
            <a href="#">How it Works</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <h1 className="font-semibold mb-4 text-lg">Newsletter</h1>
          <p className="mb-4 text-sm">
            Subscribe to the free newsletter and stay up to date
          </p>
          {/* input field here !! */}
          <div className="flex items-center w-full md:w-[310px] justify-between h-[50px] rounded-2xl px-3 ring-1 ring-[#E7E6E6] mb-6">
            <input
              type="email"
              placeholder="Your email address"
              id="email"
              name="email"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <button className="px-4 py-2 bg-[#5a4bff] text-white rounded-lg text-sm hover:cursor-pointer">
              Send
            </button>
          </div>

          <div className="font-semibold mb-3">Mobile Apps</div>
          <div className="flex flex-col gap-2">
            <a href="#">iOS App</a>
            <a href="#">Android App</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
