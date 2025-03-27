import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SectionImage from "../assets/Methodology-animation-2.webp"; // Replace with actual image path
import PlayButton from "../assets/play-button.svg";

const Methodology = () => {
  return (
    <section className="bg-[#f3fffe] py-16 px-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Methodology
        </h1>
        <div className="w-16 h-1 bg-gray-900 mx-auto mt-3"></div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="ml-10">
          <p className="text-[20px] text-[#00007A]mb-8 leading-relaxed mb-10">
            The four-year bachelor study program at EA – The Entrepreneurship
            Academy guides our students towards achieving their objectives on an
            academic, professional, personal, and financial level. Our vision on
            learning combines relevant theory and focused practice in a
            self-guided manner, supporting our students to be prepared and
            succeed both in their private and professional lives.
          </p>

          <div className="flex mt-14">
            <div className=" bg-[#00007A] rounded-full px-5 py-2 w-fit cursor-pointer group hover:scale-105 transition-all">
              <p className="flex items-center gap-2 text-white ml-2.5 font-bold">
                Learn More
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
              </p>
            </div>
          </div>
        </div>

        {/* Right - Image & Decorative Circles */}
        <div className="relative flex justify-center items-center w-full">
          {/* Decorative Rotating Circles */}
          <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-blue-500 opacity-50 animate-spin-slow"></div>
          <div className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full border border-indigo-600 opacity-40 animate-spin-reverse"></div>
          <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full border border-purple-400 opacity-30 animate-spin-slower"></div>

          {/* Image */}
          <img
            src={SectionImage}
            alt="Methodology Section"
            className="w-4/5 md:w-full max-w-md relative z-10 rounded-md"
          />

          {/* Play Button */}
          <div className="absolute z-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-xl hover:scale-105 transition cursor-pointer">
            <a href="https://youtu.be/LrECMhF60qQ">
              <img src={PlayButton} alt="Play" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
