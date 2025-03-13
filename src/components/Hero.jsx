import React from "react";
import HeroImg from "../assets/HeroImg.svg";
import circle from "../assets/circle.svg";
import GroupImg from "../assets/GroupImg.svg";
import Highlight from "../assets/Highlight.svg";

function Hero() {
  return (
    <section className=" bg-[#FAF9F4]">
      <section className=" flex px-20 py-2 items-center gap-10 justify-between min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]">
        {/* Lift side */}
        <div className=" flex flex-col gap-4 max-w-[499px] ">
          <h1 className=" relative z-20 font-bold text-[85px] leading-[105%] text-[#222222] font-Domine max-[1350px]:text-[78px] ">
            Be{" "}
            <span className="  ">
              CUET
              <img
                src={circle}
                alt="circle"
                className=" absolute top-[-30px] right-24  -z-10 max-[1350px]:top-[-35px] max-[1350px]:right-28"
              />
            </span>{" "}
            Ready with Dubuddy
          </h1>
          <p className=" font-Manrope font-medium text-[18px] leading-[100%]">
            A Super App for all your CUET needs.
          </p>

          <div className=" flex gap-[10px] flex-wrap my-8">
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              3-year PYQs
            </span>
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              Question Banks
            </span>
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              Live Test
            </span>
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              AICUET
            </span>
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              Mentorship
            </span>
            <span className=" bg-[#FCE6AF] px-6 py-3.5 rounded-full text-[14.5px] font-Manrope leading-[100%] text-[#000000] font-medium tracking-wide">
              Topper’s Playbook
            </span>
          </div>

          <div className=" flex items-center relative gap-4 w-max">
            <img
              src={GroupImg}
              alt="GroupImg"
              className=" h-[40px] object-cover object-top"
            />
            <span className=" font-Manrope font-semibold text-[18.16px] leading-[100%]">
              1,00,000+ Students{" "}
            </span>
            <img
              src={Highlight}
              alt="Highlight"
              className=" absolute -right-8 -top-3 object-cover object-top"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className=" flex-shrink-0 h-[668px] w-[657px] max-[1350px]:w-[580px] max-[1350px]:h-[600px]">
          <img
            src={HeroImg}
            alt="HeroImg"
            className=" h-full w-full object-cover object-top"
          />
        </div>
      </section>
    </section>
  );
}

export default Hero;
