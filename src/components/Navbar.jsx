import React from "react";
import Logo from "../assets/logo.svg";
import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <header className="bg-[#FAF9F4] ">
      <div className=" bg-[#F1684C] text-center font-Manrope font-bold text-white leading-[100%] text-[20px] py-4 tracking-wide max-[650px]:text-[14px]">
        <h1 className="">Limited Time Offer! Ends in 2 days 13:45:30</h1>
      </div>
      <div
        className=" flex items-center  justify-between px-20  max-[1250px]:px-16 max-[650px]:px-6
      py-6 min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]"
      >
        <img
          src={Logo}
          alt="buddy"
          className="cursor-pointer max-[650px]:h-[34px]"
        />
        <BiMenu
          size={28}
          onClick={() => setIsOpen(true)}
          className="max-[1250px]:block hidden"
        />
        {isOpen && (
          <div className=" w-full h-screen bg-black opacity-25 top-0 left-0 absolute"></div>
        )}

        <nav
          className={`max-[1250px]:absolute top-0 left-0 z-[100]  max-[1250px]:bg-white max-[1250px]:w-[400px] max-[1250px]:h-screen
        max-[650px]:w-[80%] duration-500 ease-in-out 
        ${isOpen ? "translate-x-0" : "max-[1250px]:translate-x-[-100%]"}`}
        >
          <div className="  items-center justify-between px-6 py-4 max-[1250px]:flex hidden">
            <img
              src={Logo}
              alt="buddy"
              className="cursor-pointer max-[650px]:h-[34px]"
            />
            <RxCross2
              className="text-[25px] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul
            className="flex items-center gap-[20px]   max-[1250px]:items-start max-[1250px]:w-full
          flex-col min-[1250px]:flex-row max-[1250px]:absolute max-[1250px]:gap-0 max-[1250px]:mt-5 max-[650px]:mt-3 "
          >
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              CUET Success Plans
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              Bonus
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              Testimonials
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              About
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              FAQs
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              Blogs
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              Contact Us
            </li>
            <li
              className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope
            max-[1250px]:w-full max-[1250px]:hover:bg-[#FAF9F3] max-[1250px]:px-6 max-[1250px]:py-3 max-[1250px]:rounded-lg"
            >
              Attempt PYQs
            </li>
          </ul>
        </nav>
        <button className=" bg-[#F1684C] font-Manrope font-bold text-[15px] text-white leading-[100%] rounded-full py-3.5 px-6 max-[1250px]:hidden">
          Attempt PYQs
        </button>
      </div>
    </header>
  );
}

export default Navbar;
