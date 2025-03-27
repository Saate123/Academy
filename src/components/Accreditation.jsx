import React from "react";
import Image from "../assets/Entrepreneurship-icon-1.svg";
import Image2 from "../assets/Team-perfomance-icon-1.svg";
import Image3 from "../assets/Integrated-Skills-Icon-1.svg";
import Image4 from "../assets/Leadership-Icon-1.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const accreditationData = [
  {
    title: "Entrepreneurial Essentials",
    icon: Image,
    items: [
      "Entrepreneurial Practice Theory",
      "Entrepreneurial Core Theory",
      "Research Quantitative",
      "Research Qualitative",
      "Entrepreneurial Research",
    ],
    boxColor: "#F3FFFE",
    imageBg: "#00007A",
  },
  {
    title: "Team Learning",
    icon: Image2,
    items: [
      "International Experience",
      "Team Sessions",
      "24H Challenge",
      "Team Result",
      "Book Reading",
    ],
    boxColor: "#F3FFFE",
    imageBg: "#00007A",
  },
  {
    title: "Integrated Skills",
    icon: Image3,
    items: [
      "Finance",
      "Law",
      "Website Building",
      "Online Channels Effectiveness",
      "Project Management",
    ],
    boxColor: "#F3FFFE",
    imageBg: "#00007A",
  },
  {
    title: "Leadership",
    icon: Image4,
    items: [
      "Self-Leadership",
      "Building High-Performing Teams",
      "Strategic Leadership",
      "Dialogue",
    ],
    boxColor: "#F3FFFE",
    imageBg: "#00007A",
  },
];

const Accreditation = () => {
  return (
    <div className="container max-w-screen p-10 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Accreditation
        </h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {accreditationData.map((card, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg w-[300px] overflow-hidden flex flex-col justify-between"
            style={{ backgroundColor: card.boxColor, height: "100%" }}
          >
            {/* Icon Section */}
            <div
              className="w-full flex items-center justify-center py-6"
              style={{ backgroundColor: card.imageBg }}
            >
              <img src={card.icon} alt={card.title} className="h-30" />
            </div>

            {/* Text Section */}
            <div className="flex-1 p-6 flex flex-col items-center text-left">
              <h3 className="text-2xl font-semibold text-[#00007A]">
                {card.title}
              </h3>

              <ul className="mt-3 space-y-1 text-[18px] text-[#00007A]">
                {card.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* International Curriculum Box */}
        <div
          className="shadow-md rounded-lg  w-[300px] flex flex-col items-center justify-center text-center p-6"
          style={{
            backgroundColor: "#0F5C5C",
            height: "100%",
            color: "white",
          }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            International Curriculum
          </h3>
          <FaArrowRightLong className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
