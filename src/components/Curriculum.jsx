import React from "react";
import CurriculumImage from "../assets/Methodology-animation-2.webp"; // Replace with actual image path

const Curriculum = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 relative">
        {/* Left - Image with Curved Circles */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Decorative Circles */}
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border border-blue-500 opacity-50 animate-spin-slow"></div>
          <div className="absolute w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border border-indigo-600 opacity-40 animate-spin-reverse"></div>
          <div className="absolute w-[410px] h-[410px] md:w-[510px] md:h-[510px] rounded-full border border-purple-400 opacity-30 animate-spin-slower"></div>

          {/* Image */}
          <img
            src={CurriculumImage}
            alt="Curriculum & Learning Lines"
            className="w-4/5 md:w-full max-w-md relative z-10"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Curriculum & Learning Lines
          </h2>
          <div className="w-16 h-1 bg-gray-800 my-3 rounded-full"></div>
          <p className="text-[20px] text-[#00007A] leading-relaxed">
            The curriculum of our bachelor program is built to equip our
            students with knowledge in key areas of business, such as
            entrepreneurial and business theory and practice, marketing and
            sales, or finance, while developing and strengthening skills such as
            critical thinking, dialogue and communication, collaboration and
            leadership – essential in the 21st century.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
