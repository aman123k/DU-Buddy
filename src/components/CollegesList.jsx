import React from "react";
import Frame1 from "../assets/Frame1.svg";
import Frame2 from "../assets/Frame2.svg";
import Frame3 from "../assets/Frame3.svg";
import Frame4 from "../assets/Frame4.svg";
import Frame5 from "../assets/Frame5.svg";

import { FaTag } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { cardList1, cardPoin1 } from "../data/data";
import { MdCheckCircleOutline } from "react-icons/md";

function CollegesList() {
  return (
    <section className=" py-[64px] flex flex-col gap-14 overflow-hidden">
      <h1 className=" text-[85px] font-Domine font-bold tracking-[0%] leading-[115.99999999999999%] text-center max-[1350px]:text-[78px] max-[650px]:text-[45px]">
        List of colleges
      </h1>
      <div className=" bg-[#F1684C] -rotate-[1.87deg]">
        <div
          className=" flex items-center  justify-between px-20 py-2 max-[650px]:px-10
          max-[650px]:grid-cols-2 max-[650px]:gap-x-10 max-[650px]:gap-y-2
        max-[1250px]:grid max-[1250px]:grid-cols-3 max-[1250px]:gap-y-6 max-[1250px]:py-6
         min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]"
        >
          <img
            src={Frame5}
            alt="Frame5"
            className=" h-[32.99px] cursor-pointer"
          />
          <img
            src={Frame1}
            alt="Frame1"
            className=" h-[29.42px] cursor-pointer"
          />
          <img
            src={Frame2}
            alt="Frame2"
            className=" h-[28.53px] cursor-pointer"
          />
          <img
            src={Frame3}
            alt="Frame3"
            className=" h-[25.85px] cursor-pointer"
          />
          <img
            src={Frame4}
            alt="Frame4"
            className=" h-[31.2px] cursor-pointer"
          />
          <img
            src={Frame5}
            alt="Frame5"
            className=" h-[32.99px] cursor-pointer"
          />
        </div>
      </div>

      <section
        className=" px-32 py-14 flex justify-between
        max-[850px]:grid-cols-1 max-[650px]:px-6 max-[650px]:py-3
      max-[1250px]:grid max-[1250px]:grid-cols-2 max-[1250px]:px-16 max-[1250px]:gap-8
      min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]"
      >
        {/* Card One */}

        <section className=" border-2 border-[#C9C6BD] w-[440px] max-[1250px]:w-full  max-[850px]:m-auto rounded-3xl bg-[#FFFFFF] p-8 flex flex-col gap-2.5">
          <h2 className=" text-[#F1684C] text-[38px] font-bold leading-[100%] font-Manrope tracking-[-5%]">
            Aspirant’s Plan
          </h2>
          {/* price */}
          <div className=" flex items-center gap-2 my-2">
            <h6 className=" font-bold text-[34px] font-Manrope leading-[100%]">
              ₹599
            </h6>
            <sub className=" text-[12px] font-Manrope line-through leading-[100%]">
              ₹699
            </sub>
            <span className=" text-[17px] font-Manrope font-medium leading-[100%]">
              / subject
            </span>
          </div>

          {/* Tags */}
          <div className=" px-2 flex items-center gap-2 font-semibold font-Manrope text-[17.5px] text-[#F1684C] leading-[100%]">
            <FaTag size={25} /> Pick at least 3 subjects to save big
          </div>
          {/* input */}
          <div className="mx-2 border border-[#F1684C] my-2 bg-[#FAF9F5] overflow-hidden rounded-3xl flex items-center px-4 ">
            <input
              type="text"
              placeholder="Add Subject"
              className=" w-full py-2 bg-transparent outline-none placeholder:text-[#F1684C] tracking-wide"
            />
            <FaCaretDown className=" flex-shrink-0 text-[#F1684C] text-xl cursor-pointer" />
          </div>

          {/* Points */}
          <div className=" px-2 flex gap-5 items-center overflow-y-scroll">
            {cardPoin1.map((data, index) => {
              return (
                <span
                  key={index}
                  className=" flex items-center gap-4 bg-[#FCE6AF] hover:bg-[#F1684C] flex-shrink-0 
                   px-6 py-2.5 rounded-full font-Manrope text-[16px] leading-[100%] tracking-wide cursor-pointer"
                >
                  {data}
                  <RxCross2 />
                </span>
              );
            })}
          </div>

          {/* List point */}
          <ul className=" px-2 flex flex-col gap-[18px] my-8">
            {cardList1.map((card) => {
              return (
                <li
                  key={card.id}
                  className=" flex font-Manrope gap-2 font-medium  items-center text-[17px] text-[#000]"
                >
                  <MdCheckCircleOutline
                    color="#F1684C"
                    className=" text-[24px] flex-shrink-0"
                  />
                  {card.item}
                </li>
              );
            })}
          </ul>
          <div className=" mx-2 bg-[#FAF9F5] rounded-full flex items-center overflow-hidden">
            <input
              type="text"
              placeholder="Use Coupon Code"
              className=" bg-transparent w-full py-2.5 px-4 outline-none placeholder:text-[#969696] font-medium font-Manrope text-[14px]"
            />
            <button className=" w-max bg-[#222222] py-2.5 flex-shrink-0 px-6 font-medium font-Manrope text-[14px] text-[#fff]">
              Apply
            </button>
          </div>
          <button className=" mt-5 bg-[#F1684C] font-Manrope text-[20px] font-bold text-[#fff] py-2.5 rounded-full">
            Pay ₹599{" "}
          </button>
        </section>

        <section className=" border-2 border-[#C9C6BD] w-[440px] max-[1250px]:w-full  max-[850px]:m-auto rounded-3xl bg-[#FFFFFF] p-8 flex flex-col gap-2.5">
          <h2 className=" text-[#F1684C] text-[38px] font-bold leading-[100%] font-Manrope tracking-[-5%]">
            Topper’s Plan
          </h2>
          {/* price */}
          <div className=" flex items-center gap-2 my-2">
            <h6 className=" font-bold text-[34px] font-Manrope leading-[100%]">
              ₹2499
            </h6>
            <sub className=" text-[12px] font-Manrope line-through leading-[100%]">
              ₹2799
            </sub>
            <span className=" text-[17px] font-Manrope font-medium leading-[100%]">
              All Subjects
            </span>
          </div>

          {/* List point */}
          <ul className=" px-2 flex flex-col gap-[18px] my-8">
            {cardList1.map((card) => {
              return (
                <li
                  key={card.id}
                  className=" flex font-Manrope gap-2 font-medium  items-center text-[17px] text-[#000]"
                >
                  <MdCheckCircleOutline
                    color="#F1684C"
                    className=" text-[24px] flex-shrink-0"
                  />
                  {card.item}
                </li>
              );
            })}
          </ul>

          {/* Exclusive */}

          <div className=" flex items-center relative z-20 mb-8 mt-2">
            <p className=" text-center bg-[#FFFFFF] px-2 absolute z-10 w-max top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              Exclusive
            </p>
            <div className=" h-0.5 bg-black w-full "></div>
          </div>

          <ul className=" px-2 flex flex-col gap-[18px] ">
            <li className=" flex font-Manrope gap-2 font-medium  items-center text-[17px] text-[#F1684C]">
              <MdCheckCircleOutline
                color="#F1684C"
                className=" text-[24px] flex-shrink-0"
              />
              AICUET Test Series (launching soon)
            </li>
            <li className=" flex font-Manrope gap-2 font-medium  items-center text-[17px] text-[#F1684C]">
              <MdCheckCircleOutline
                color="#F1684C"
                className=" text-[24px] flex-shrink-0"
              />
              Topper Revision Notes (launching soon)
            </li>
          </ul>

          <div className=" mx-2 bg-[#FAF9F5] rounded-full flex items-center overflow-hidden mt-5">
            <input
              type="text"
              placeholder="Use Coupon Code"
              className=" bg-transparent w-full py-2.5 px-4 outline-none placeholder:text-[#969696] font-medium font-Manrope text-[14px]"
            />
            <button className=" w-max bg-[#222222] py-2.5 flex-shrink-0 px-6 font-medium font-Manrope text-[14px] text-[#fff]">
              Apply
            </button>
          </div>
          <button className=" mt-5 bg-[#F1684C] font-Manrope text-[20px] font-bold text-[#fff] py-2.5 rounded-full">
            Pay ₹2499
          </button>
        </section>
      </section>
    </section>
  );
}

export default CollegesList;
