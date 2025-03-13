import React from "react";
import wave from "../assets/wave.svg";
import Highlight2 from "../assets/Highlight2.svg";
import footerLogo from "../assets/footerLogo.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import appStore from "../assets/appStore.svg";

import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";

function Footer() {
  return (
    <section className="">
      <img src={wave} className=" w-full object-fill min-[1600px]:" alt="" />
      <section className="bg-[#F1684C] -mt-[1.5px] px-20 pt-8 pb-10 flex flex-col gap-20">
        <div className=" text-center flex flex-col gap-12 justify-center items-center ">
          <h1 className=" flex flex-col relative font-bold z-20 font-Domine text-[80px] leading-[99%] text-[#ffff] max-[1350px]:text-[78px]">
            Join our
            <span className=" text-[#222222]">
              CUET
              <img
                src={Highlight2}
                alt="Highlight2"
                className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10"
              />
            </span>
            community.
          </h1>
          <button className=" text-white bg-[#222222] text-[24px] w-max px-14 rounded-full py-5 leading-[105%] font-bold font-Manrope">
            Join Now
          </button>
        </div>

        <section className=" flex items-center justify-between min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] ">
          <div className=" flex flex-col gap-6">
            <img
              src={footerLogo}
              alt="logo"
              className=" h-[40px] w-[164px] object-cover"
            />
            <p className=" text-[22px] font-Manrope font-bold leading-[100%] text-white">
              Super App for all CUET needs
            </p>
            <p className=" flex gap-2 items-center text-[#FFFFFF] text-[16px] font-Manrope leading-[99%]">
              <IoMdCall className=" text-[#fafafa] text-xl" /> +91 9813903635
              (Mon-Fri, 9:00 AM to 7:00 PM)
            </p>
            <p className=" flex gap-2 items-center text-[#FFFFFF] text-[16px] font-Manrope leading-[99%]">
              <IoMdMail className=" text-[#fafafa] text-xl" />{" "}
              contact@dubuddy.in
            </p>
            <div className=" flex gap-6 h-[66px] mt-10">
              <img src={GooglePlay} alt="GooglePlay" />
              <img src={appStore} alt="appStore" />
            </div>
          </div>
          <div className=" flex flex-col gap-20">
            <ul className=" flex flex-col gap-[15px] ">
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                IOS App
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Android App
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Plans
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                About
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Blogs
              </li>
            </ul>
            <div className=" flex gap-6">
              <FaYoutube size={24} color="#fff" className="cursor-pointer" />
              <FaInstagram size={24} color="#fff" className="cursor-pointer" />
              <LiaFacebookSquare
                size={24}
                color="#fff"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-20">
            <ul className=" flex flex-col gap-[15px]">
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Contact
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                User Terms
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Privacy Policy
              </li>
              <li className="font-Manrope font-bold cursor-pointer text-white text-[18px] leading-[99%]">
                Refund Policy
              </li>
            </ul>
            <div></div>
          </div>
        </section>

        <p className=" text-[#FFFFFF] font-[400] font-Manrope text-[16px] text-center">
          Copyright © 2024-2025 Cyberflow Infra Private Limited. All rights
          reserved
        </p>
      </section>
    </section>
  );
}

export default Footer;
