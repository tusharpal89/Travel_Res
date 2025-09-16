import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import {IconX} from "@tabler/icons-react";

const Navbar = () => {

  const [open, setopen] = useState(false);  
  
  return (
    <>
      <div className="flex justify-evenly gap-10 relative z-10 ">
        <div className="mt-2">
          <img src="/via.svg" alt="tour_Logo" className="" />
        </div>

        <div className=" hidden sm:flex gap-5 ">
          <a href="#" className="text-[#eb662b] mt-2">
            Home
          </a>
          <a href="#" className="mt-2">
            Tour
          </a>
          <a href="#" className="mt-2">
            Destination
          </a>
          <a href="#" className="mt-2">
            Activities
          </a>
          <a href="#" className="mt-2">
            Pages
          </a>
          <a href="#" className="mt-2">
            Contact
          </a>
        </div>

        <div className=" hidden  sm:flex gap-5 text-white mr-30 ">
          <a href="#" className="mt-2">
            USD
          </a>
          <a href="#" className="mt-2">
            Help
          </a>
          <a href="#" className="mt-2">
            Sign up
          </a>
          <a
            href="#"
            className="mt-2 ring-1 h-[28px] rounded-lg px-2 flex items-center"
          >
            Log in
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button
            onClick={() => setopen(!open)}
            className="hover:cursor-pointer mt-1"
          >
            {open ? <IconX /> : <IconMenu2 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className=" relative sm:hidden flex flex-col  px-20 py-8 bg-white shadow-md z-20 mt-2 ">
          <a href="#" className="text-[#eb662b]">
            Home
          </a>
          <a href="#">Tour</a>
          <a href="#">Destination</a>
          <a href="#">Activities</a>
          <a href="#">Pages</a>
          <a href="#">Contact</a>

          <a href="#">USD</a>
          <a href="#">Help</a>
          <a href="#">Sign up</a>
          <a
            href="#"
            className="ring-1 h-[32px] rounded-lg px-2 flex items-center w-fit"
          >
            Log in
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
