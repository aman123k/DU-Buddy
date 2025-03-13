import Line from "../assets/line.svg";
import img1 from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";
import img4 from "../assets/04.png";
const Bonuses = () => {
  return (
    <section className=" bg-[#F1684C] px-20 py-16 ">
      <section className="flex flex-col gap-32 min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]">
        <h1 className=" text-[85px] leading-[115.99999999999999%] text-center font-Domine font-bold text-white max-[1350px]:text-[78px]">
          Enjoy these bonuses crafted with ❤️ only for you
        </h1>

        <section className=" relative z-20">
          <section className=" grid grid-cols-2 justify-center w-max m-auto gap-[95px]">
            <div className=" border-[#FFFFFF] border w-[320px] flex flex-col gap-2.5 bg-[#F1684C] relative border-dotted text-white px-6 pt-9 rounded-[27.5px] z-20 pb-8">
              <span
                className=" absolute top-[-30px] left-[50%] translate-x-[-50%] bg-[#F1684C] px-4 text-[48px]
               font-Domine leading-[135%] font-bold "
              >
                01
              </span>
              <h2 className=" text-center font-bold text-[28px] leading-[135%] tracking-[-5%] font-Manrope">
                Access papers from multiple shifts
              </h2>
              <p className=" text-[16px] font-semibold text-center ">
                Attempt PYQs from multiple shifts for a complete prep
              </p>
              <img
                src={img1}
                alt="Access papers from multiple shifts"
                className=" h-[270px] rounded-[27.5px] mt-7 object-cover object-top"
              />
            </div>

            <div className=" border-[#FFFFFF] border w-[320px] flex flex-col gap-2.5 bg-[#F1684C] relative border-dotted text-white px-6 pt-9 rounded-[27.5px] z-20 pb-8">
              <span
                className=" absolute top-[-30px] left-[50%] translate-x-[-50%] bg-[#F1684C] px-4 text-[48px]
               font-Domine leading-[135%] font-bold "
              >
                02
              </span>
              <h2 className=" text-center font-bold text-[28px] leading-[135%] tracking-[-5%] font-Manrope">
                Unlimited Practice Opportunities
              </h2>
              <p className=" text-[16px] font-semibold text-center ">
                Practice as much as you need with multiple attempts on PYQs.
              </p>
              <img
                src={img2}
                alt="Access papers from multiple shifts"
                className=" h-[270px] rounded-[27.5px] mt-7 object-cover object-top"
              />
            </div>

            <div className=" border-[#FFFFFF] border w-[320px] flex flex-col gap-2.5 bg-[#F1684C] relative border-dotted text-white px-6 pt-9 rounded-[27.5px] z-20 pb-8">
              <span
                className=" absolute top-[-30px] left-[50%] translate-x-[-50%] bg-[#F1684C] px-4 text-[48px]
               font-Domine leading-[135%] font-bold "
              >
                03
              </span>
              <h2 className=" text-center font-bold text-[28px] leading-[135%] tracking-[-5%] font-Manrope">
                Bi-lingual (English/Hindi)
              </h2>
              <p className=" text-[16px] font-semibold text-center ">
                Attempt your papers in the language you prefer
              </p>
              <img
                src={img3}
                alt="Access papers from multiple shifts"
                className=" h-[270px] rounded-[27.5px] mt-7 object-cover object-top"
              />
            </div>

            <div className=" border-[#FFFFFF] border w-[320px] flex flex-col gap-2.5 bg-[#F1684C] relative border-dotted text-white px-6 pt-9 rounded-[27.5px] z-20 pb-8">
              <span
                className=" absolute top-[-30px] left-[50%] translate-x-[-50%] bg-[#F1684C] px-4 text-[48px]
               font-Domine leading-[135%] font-bold "
              >
                04
              </span>
              <h2 className=" text-center font-bold text-[28px] leading-[135%] tracking-[-5%] font-Manrope">
                Leaderboard
              </h2>
              <p className=" text-[16px] font-semibold text-center">
                Track your progress and compete with top achievers to stay
                motivated.
              </p>
              <img
                src={img4}
                alt="Access papers from multiple shifts"
                className=" h-[270px] rounded-[27.5px] mt-7 object-cover object-top"
              />
            </div>
          </section>
          <img
            src={Line}
            alt=""
            className=" -z-10 absolute right-0 top-[50%] h-[830px] translate-y-[-50%]"
          />
        </section>
      </section>
    </section>
  );
};

export default Bonuses;
