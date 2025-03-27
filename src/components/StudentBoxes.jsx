import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import Image1 from "../assets/Difrnt-Logo-SVG-White-1.svg";
import Image2 from "../assets/Flip-Logo-SVG-White-1.svg";
import Image3 from "../assets/Confidas-Logo-SVG-white-1.svg";
import Image4 from "../assets/Fustite-cu-Luminite-Logo-SVG-White-1.svg";
import Image5 from "../assets/Zoe-Studio-white-Logo-1.webp";
import Image6 from "../assets/Rawmantic-logo-1.webp";
import Image7 from "../assets/Ez-Stick-Logo-Svg-White-1.svg";
import Image8 from "../assets/Humange-Logo-Black-SVG-1.svg";

const studentBoxes = [
  {
    img: Image1,
    name: "Difrnt",
    text: "Difrnt is a digital marketing agency focused on online performance with a wide skill set: from Paid Media, Search Engine Optimisation, Marketing Automations to UX & UI as well as the ability to execute growth hacking campaigns.",
    color: "#10004F",
    textcolor: "#FFFFFF",
  },
  {
    img: Image2,
    name: "Flip",
    text: "Flip helps people sell their phones without wasting time in meetings with strangers and uncomfortable negotiations. The team handles everything and sends clients the cash in the bank account.",
    color: "#35BC6C",
    textcolor: "#FFFFFF",
  },
  {
    img: Image3,
    name: "Confidas",
    text: "Confidas is an online platform that helps small businesses get paid on time by providing credit reports for more than 600,000 active Romanian companies and the people who run them.",
    color: "#2E2F8A",
    textcolor: "#FFFFFF",
  },
  {
    img: Image4,
    name: "Fustițe cu Luminițe",
    text: "Fustițe cu Luminițe is more than just a tutu for girls — they deliver joy and boldness to girls, teens, and women, making them shine everywhere they go.",
    color: "#36007A",
    textcolor: "#FFFFFF",
  },
  {
    img: Image5,
    name: "Zoe Studio",
    text: "Zoe Studio is a custom apparel studio manufacturing clothing for Romanian brands, offering embroidery, DTG printing, and screen printing.",
    color: "#ED877A",
    textcolor: "#FFFFFF",
  },
  {
    img: Image6,
    name: "Rawmantic",
    text: "Rawmantic is a bakery with a simple mission: make a difference in people’s health through plant-based, guilt-free desserts — no refined sugar or artificial ingredients.",
    color: "#FFFFFF",
    textcolor: "#17242a",
  },
  {
    img: Image7,
    name: "Ez Stick",
    text: "Ez Stick is a smart cell phone stand that sticks your phone to surfaces like glass, wood, and metal, making your life easier and more fun!",
    color: "#D54E50",
    textcolor: "#FFFFFF",
  },
  {
    img: Image8,
    name: "Humance Cosmetics",
    text: "Humance Cosmetics is an organic cosmetics brand where you can customize body and hair products according to your needs and desires.",
    color: "#FFFFFF",
    textcolor: "#17242a",
  },
];

function StudentBoxes() {
  return (
    <div className="py-16 px-4 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-black text-3xl md:text-5xl font-semibold">
          What do our students say
        </h2>
        <div className="w-18 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Swiper for small screens */}
      <div className="block lg:hidden relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
        >
          {studentBoxes.map((student, index) => (
            <SwiperSlide key={index}>
              <div
                className="shadow-md p-6 flex flex-col items-center ml-10 w-2xs"
                style={{ backgroundColor: student.color }}
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="h-32 object-contain mb-4"
                />
                <div className="text-left">
                  <h4
                    className="text-2xl font-semibold mb-2"
                    style={{ color: student.textcolor }}
                  >
                    {student.name}
                  </h4>
                  <p style={{ color: student.textcolor, lineHeight: "35px" }}>
                    {student.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="custom-swiper-prev bg-[#b7d6d6] p-2 rounded-full cursor-pointer absolute top-1/2 -left-4 transform -translate-y-1/2 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div className="custom-swiper-next bg-[#b7d6d6] p-2 rounded-full cursor-pointer absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Grid for large screens */}
      <div className="hidden lg:grid grid-cols-4 gap-6 max-w-6xl mx-auto">
        {studentBoxes.map((student, index) => (
          <div
            key={index}
            className="shadow-md p-4 flex flex-col items-center"
            style={{ backgroundColor: student.color }}
          >
            <img
              src={student.img}
              alt={student.name}
              className="h-32 object-contain mb-4"
            />
            <div className="text-left">
              <h4
                className="text-2xl font-semibold mb-2"
                style={{ color: student.textcolor }}
              >
                {student.name}
              </h4>
              <p style={{ color: student.textcolor, lineHeight: "35px" }}>
                {student.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-14">
        <div className="border-4 border-[#00007A] rounded-full px-5 py-2 w-fit cursor-pointer group hover:scale-105 transition-all">
          <p className="flex items-center gap-2 text-[#00007A] ml-2.5 font-bold">
            Chat with an EA student
            <FaArrowRightLong className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#00007A]" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default StudentBoxes;
