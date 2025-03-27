import React from "react";
import DesktopImage from "../assets/Desktop-first-section-Burghelia-1.webp"; // Replace with actual desktop image path
import MobileImage from "../assets/Homepage-Mobile.webp"; // Replace with actual mobile image path
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 overflow-hidden">
      {" "}
      {/* Prevent horizontal scroll */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="md:ml-10 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            The business university you’ve always wanted in Romania
          </h1>
          <div className="w-16 h-1 bg-gray-900 mb-6 mx-auto md:mx-0"></div>

          {/* Mobile Image (Visible Only on Small Screens) */}
          <div className="md:hidden mb-6">
            <img
              src={MobileImage}
              alt="Business University Mobile View"
              className="w-full max-w-[90%] ml-5 h-auto"
            />
          </div>

          <p className="text-[#00007A] text-lg md:text-xl mb-8 leading-relaxed">
            A BBA program in business management and entrepreneurship. An
            international accreditation and global exposure. Education and doing
            business, all at once. Personal development and leadership.
          </p>

          <div className="flex justify-center md:justify-start mt-8">
            <div className="bg-[#00007A] rounded-full px-5 py-2 w-fit cursor-pointer group hover:scale-105 transition-all">
              <p className="flex items-center gap-2 text-white font-bold">
                Download brochure
                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white" />
              </p>
            </div>
          </div>
        </div>

        {/* Right - Desktop Image with Decorative Curves */}
        <div className="relative hidden md:flex justify-center -top-18 left-8.5 items-center overflow-hidden">
          {/* Decorative Circles (Prevent Overflow) */}
          <div className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-blue-500 opacity-50 animate-spin-slow -z-10"></div>
          <div className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-indigo-600 opacity-40 animate-spin-reverse -z-10"></div>
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-purple-400 opacity-30 animate-spin-slower -z-10"></div>

          {/* Desktop Image */}
          <img
            src={DesktopImage}
            alt="Business University Desktop View"
            className="w-4/5 md:w-full max-w-3xl relative z-10 "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
