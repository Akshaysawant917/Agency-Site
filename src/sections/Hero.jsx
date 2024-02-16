import React from "react";
import heroImg from "../assets/images/heroimg.png";
const Hero = () => {
  return (
    <section id="hero" className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full bg-slate-100 h-auto lg:h-screen">
      <div className=" flex flex-col items-start gap-8 lg:w-1/2 px-10 py-10 lg:px-20 lg:py-20">
        <h1 className="text-6xl font-bold text-green-600">
          One click solutin for your sttaux website
        </h1>
        <p >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          nemo incidunt et itaque ea esse, veniam autem maxime vel
          exercitationem?
        </p>
        <div className="flex justify-center items-center gap-5">
          <button className="bg-green-500 text-white py-2 px-2 rounded-md text-[16px] hover:bg-black hover:text-white">
            View More
          </button>
          <button className="bg-white border-2 text-green-500 border-green-600 py-2 px-2 rounded-md text-[16px] hover:border-black hover:text-black">
            Watch Video
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 px-4 py-4 object-cover">
        <img src={heroImg} width={500} height={500} alt="" />
      </div>
    </section>
  );
};

export default Hero;
