import React from "react";
import Image from "../assets/Netherlands-1.webp";
import Image2 from "../assets/Emerging-econonomies-1.webp";
import Image3 from "../assets/Developed-Economies-1.webp";
import Image4 from "../assets/Thesis-1.webp";

const studyYears = [
  {
    year: "Year 1",
    title: "The Netherlands",
    image: Image,
  },
  {
    year: "Year 2",
    title: "Emerging Economies",
    image: Image2,
  },
  {
    year: "Year 3",
    title: "Developed Economies",
    image: Image3,
  },
  {
    year: "Year 4",
    title: "Bachelor Thesis",
    image: Image4,
  },
];

const StudyProgram = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* International Experience Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          International Experience
        </h2>
        <div className="w-16 h-1 bg-gray-800 mx-auto mt-2 rounded-full"></div>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          EA – The Entrepreneurship Academy is part of an international network
          of entrepreneurship and business study programs, across the world –
          from Finland to the Netherlands, Great Britain, Peru, and South
          Africa. Furthermore, in each study year our students gain
          international experience through International Experiences.
        </p>
      </div>

      {/* Study Program Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {studyYears.map((item, index) => (
          <div key={index}>
            {/* Year and Title */}
            <h3 className="text-lg font-semibold text-gray-800">{item.year}</h3>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              {item.title}
            </h2>

            {/* Image Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-66 object-cover hover:scale-110 transition-transform transform"
              />

              {/* Button Overlay */}
              <div className="absolute bottom-4 right-4">
                <button className="bg-white px-4 py-2 rounded-full text-gray-800 font-medium shadow-md transition-transform transform hover:scale-105">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyProgram;
