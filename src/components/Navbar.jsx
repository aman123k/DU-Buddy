import React from "react";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="bg-[#FAF9F4] ">
      <div className=" bg-[#F1684C] text-center font-Manrope font-bold text-white leading-[100%] text-[20px] py-4 tracking-wide">
        <h1 className="">Limited Time Offer! Ends in 2 days 13:45:30</h1>
      </div>
      <div className=" flex items-center  justify-between px-20 py-6 min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]">
        <img src={Logo} alt="buddy" className="cursor-pointer" />

        <nav>
          <ul className=" flex items-center gap-[20px]">
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              CUET Success Plans
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              Bonus
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              Testimonials
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              About
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              FAQs
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              Blogs
            </li>
            <li className=" text-[16px] font-medium text-[#000] cursor-pointer leading-[105%] font-Manrope">
              Contact Us
            </li>
          </ul>
        </nav>
        <button className=" bg-[#F1684C] font-Manrope font-bold text-[15px] text-white leading-[100%] rounded-full py-3.5 px-6">
          Attempt PYQs
        </button>
      </div>
    </header>
  );
}

export default Navbar;
