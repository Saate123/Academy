import React from "react";
import Image from "../assets/Step-1-line.svg";
import Image2 from "../assets/Step-2-line.svg";

const steps = [
  {
    number: "01",
    title: "Online Application",
    description:
      "An online application that the candidates have to submit, comprising aspects like personal and academic details, personal statements, a video, and a CV. Please make sure you have/create a Gmail account in order to apply. (Time invested: 3 hours).",
  },
  {
    number: "02",
    title: "Bootday",
    description:
      "A full working day, spent in the university. The aim of the day is that candidates get a glimpse of how a regular day of a student’s life looks like. They will solve a real business challenge, work in teams, learn from experts, interact with students and coaches. (Time invested: 12 hours).",
  },
  {
    number: "03",
    title: "Interview and testing",
    description:
      "An online/offline interview session centered around the candidate’s experience so far in the process. Observations from the Bootday will be addressed. Prior to the interview, the candidate will go through a 30-minute cognitive and personality test, which will also be subject for conversation during the interview. (Time invested: 1.5 hours).",
  },
];

function FinancingTools() {
  return (
    <div className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Financing tools
      </h2>
      <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full mb-6"></div>
      <p className="text-[#4F4FA3] max-w-6xl mx-auto text-xl text-center mb-16">
        We offer our support to those in need of financial aid. In order to be
        eligible for accessing one of our financing tools, the candidate has to
        successfully go through our admission process, be accepted at our
        university, and confirm their place by paying a 10% of the yearly
        tuition fee deposit.
      </p>

      <div className="flex flex-col lg:flex-row justify-around items-center relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-96 relative"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold z-10 bg-[#00007A]">
                {step.number}
              </div>

              {/* Show line images between steps */}
              {index < steps.length - 1 && (
                <div className="absolute top-5 -right-64 lg:block hidden">
                  <img
                    src={index === 0 ? Image : Image2}
                    alt="arrow line"
                    className="w-52"
                  />
                </div>
              )}
            </div>
            <h4 className="text-2xl font-bold mt-4 text-gray-900">
              {step.title}
            </h4>
            <p className="text-[#4F4FA3] mt-3 text-lg mb-5">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-45 h-10 mb-5 bg-[#00007A] mx-auto mt-4 rounded-full flex items-center justify-center text-white font-bold">
        Apply Now
      </div>
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Financing tools
        </h2>
        <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full mb-6"></div>
        <p className="text-[#4F4FA3] max-w-6xl mx-auto text-xl text-center mb-16">
          We offer our support to those in need of financial aid. In order to be
          eligible for accessing one of our financing tools, the candidate has
          to successfully go through our admission process, be accepted at our
          university, and confirm their place by paying a 10% of the yearly
          tuition fee deposit.
        </p>
      </div>
    </div>
  );
}

export default FinancingTools;
