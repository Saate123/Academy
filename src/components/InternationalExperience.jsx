import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function InternationalExperience() {
  return (
    <section className="relative bg-teal-900 text-white p-10 w-full">

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-16 px-6">
        {/* Icon */}
        <FaGraduationCap className="text-5xl mx-auto mb-4" />

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold">
          International Experience
        </h2>

        {/* Underline */}
        <div className="w-12 h-1 bg-white mx-auto my-3"></div>

        {/* Description */}
        <p className="text-sm sm:text-lg leading-relaxed mt-4">
          EA – The Entrepreneurship Academy is part of an international network
          of entrepreneurship and business study programs across the world –
          from Finland to the Netherlands, Great Britain, and beyond.
        </p>
      </div>
      <div className="flex justify-center mt-14">
        <div className="border-4 border-white rounded-full px-5 py-2 w-fit cursor-pointer group hover:scale-105 transition-all">
          <p className="flex items-center gap-2 text-white ml-2.5 font-bold">
            Learn More
            <FaArrowRightLong className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
          </p>
        </div>
      </div>
    </section>
  );
}

export default InternationalExperience;
