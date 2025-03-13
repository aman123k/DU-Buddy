import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";
import { faqs } from "../data/data";

const FAQItem = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className=" px-20 py-20 flex flex-col gap-16 max-[650px]:px-10 max-[650px]:gap-8 max-[650px]:py-16">
      <h1 className="text-center font-bold text-[80px] leading-[100%] font-Domine max-[1350px]:text-[78px] max-[650px]:text-[45px]">
        Still have <span className=" text-[#F1684C]"> questions? </span>
      </h1>
      <div className="w-[900px] m-auto max-[1250px]:w-full ">
        {faqs.map((data, index) => {
          return (
            <div
              key={data.question}
              className={`py-6 gap-6
                ${index !== faqs.length - 1 ? "border-b" : ""}`}
            >
              <button
                className="flex items-center justify-between text-[#4A4949] w-full text-[20px] font-Manrope font-bold leading-[100%]"
                onClick={() => toggleQuestion(data.question)}
              >
                <span>{data.question}</span>
                {openQuestion === data.question ? (
                  <FaMinus color="#A4A9AF" className="text-[18px]" />
                ) : (
                  <FaPlus color="#A4A9AF" className="text-[18px]" />
                )}
              </button>

              <div
                className={`text-[#4A4949] font-Manrope text-[18px] leading-[100%] overflow-hidden duration-300 ease-in-out
                  ${
                    openQuestion === data.question
                      ? "max-h-screen mt-3"
                      : "max-h-0"
                  }`}
              >
                {data.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQItem;
