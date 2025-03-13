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
      <section className="bg-[#F1684C] -mt-[1.5px] px-20 pt-8 pb-10 flex flex-col gap-20 max-[650px]:gap-16 max-[1250px]:px-16 max-[650px]:px-6">
        <div className=" text-center flex flex-col gap-12 justify-center items-center max-[650px]:gap-10">
          <h1
            className=" flex flex-col relative font-bold z-20 font-Domine text-[80px] leading-[99%] text-[#ffff] max-[1350px]:text-[78px]
          max-[650px]:text-[45px]"
          >
            Join our
            <span className=" text-[#222222]">
              CUET
              <img
                src={Highlight2}
                alt="Highlight2"
                className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10 max-[650px]:w-[160px]"
              />
            </span>
            community.
          </h1>
          <button className=" text-white bg-[#222222] text-[24px] w-max px-14 rounded-full py-5 leading-[105%] font-bold font-Manrope max-[650px]:py-3.5">
            Join Now
          </button>
        </div>
        <section
          className=" flex items-center justify-between 
        max-[650px]:flex-col max-[650px]:items-start
        min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] "
        >
          <div className=" flex flex-col gap-6">
            <img
              src={footerLogo}
              alt="logo"
              className=" h-[40px] w-[164px] object-cover"
            />
            <p className=" text-[22px] font-Manrope font-bold leading-[100%] max-[1250px]:text-[18px] text-white">
              Super App for all CUET needs
            </p>
            <p className=" flex gap-2 items-center text-[#FFFFFF] text-[16px] max-[1250px]:text-[14px] font-Manrope leading-[99%]">
              <IoMdCall className=" text-[#fafafa] text-xl" /> +91 9813903635
              (Mon-Fri, 9:00 AM to 7:00 PM)
            </p>
            <p className=" flex gap-2 items-center text-[#FFFFFF] text-[16px] max-[1250px]:text-[14px] font-Manrope leading-[99%]">
              <IoMdMail className=" text-[#fafafa] text-xl" />{" "}
              contact@dubuddy.in
            </p>
            <div className=" flex gap-6 h-[66px] mt-10 max-[650px]:hidden">
              <img
                src={GooglePlay}
                alt="GooglePlay"
                className="max-[1250px]:h-[44px]"
              />
              <img
                src={appStore}
                alt="appStore"
                className="max-[1250px]:h-[44px]"
              />
            </div>
          </div>
          <div className=" flex items-center gap-64 max-[1250px]:gap-16 max-[650px]:w-full justify-between max-[650px]:mt-6  max-[650px]:items-start">
            <div className=" flex flex-col gap-20">
              <ul className=" flex flex-col gap-[15px] ">
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  IOS App
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Android App
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Plans
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  About
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Blogs
                </li>
              </ul>
              <div className=" flex gap-6 max-[650px]:hidden">
                <FaYoutube size={24} color="#fff" className="cursor-pointer" />
                <FaInstagram
                  size={24}
                  color="#fff"
                  className="cursor-pointer"
                />
                <LiaFacebookSquare
                  size={24}
                  color="#fff"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-20 max-[650px]:gap-0">
              <ul className=" flex flex-col gap-[15px]">
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Contact
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  User Terms
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Privacy Policy
                </li>
                <li className="font-Manrope font-bold cursor-pointer max-[1250px]:text-[14px]  text-white text-[18px] leading-[99%]">
                  Refund Policy
                </li>
              </ul>
              <div></div>
            </div>
          </div>

          {/* for  mobile screen  */}
          <section className="  flex-col items-baseline gap-5 mt-10 max-[650px]:flex hidden">
            <div className=" flex gap-6">
              <FaYoutube size={24} color="#fff" className="cursor-pointer" />
              <FaInstagram size={24} color="#fff" className="cursor-pointer" />
              <LiaFacebookSquare
                size={24}
                color="#fff"
                className="cursor-pointer"
              />
            </div>
            <div className=" flex gap-4">
              <img src={GooglePlay} alt="GooglePlay" className="h-[30px]" />
              <img src={appStore} alt="appStore" className="h-[30px]" />
            </div>
          </section>
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
