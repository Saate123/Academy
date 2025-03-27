import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RiDoubleQuotesL } from "react-icons/ri";
import "../index.css";

import Image1 from "../assets/George-Moroianu-Testimonial.webp";
import Image2 from "../assets/Miruna-Toanchina-Testimonial.webp";
import Image3 from "../assets/Clara-Mateoiu.webp";
import Image4 from "../assets/Octavian-Sicoe-Testimonial.webp";
import Image5 from "../assets/Horia-Stupu-Testimonial.webp";
import Image6 from "../assets/Alex-Burghelia-Testimonial.webp";
import Image7 from "../assets/Teodora-Popa.webp";
import Image8 from "../assets/Petrisor-Razvan-Catalin.webp";

const admissionSlides = [
  {
    img: Image1,
    name: "George Moroianu",
    year: "Alumni 2020",
    text: "I discovered early on that entrepreneurship was my passion. I picked Entrepreneurship Academy as my university option because I was aware that only a university that puts accent on practice more than on theory can be relevant in the business field. Looking back to the 4 years of studies, I strongly believe E.A. was instrumental to my development both as a person and as an entrepreneur. It is fascinating how much all the courses, Learning Journeys, colleagues and business experts around the community have contributed to who I am today! As the university ends, I am currently the founder of Flip.ro, an investment backed marketplace that recently exceeded 2,000,000 euros in revenues.",
  },
  {
    img: Image2,
    name: "Miruna Toanchină",
    year: "Alumni",
    text: "Choosing to study at The Entrepreneurship Academy has been one of the best decisions I ever made when I was 18. I was and still am keen on always finding myself on a steep learning curve, both from a theoretical and practical point of view. After four challenging years, full of experiences that enabled me to grow on personal and professional level, depression and joy, courses and business, I discovered what I am really passionate about. That is, building impact startups with passionate individuals. If you are ready to start the journey of your entrepreneurial life and have real impact on what matters for you, EA is the right call!",
  },
  {
    img: Image3,
    name: "Clara Mateoiu",
    year: "Year II Student",
    text: "I knew I wanted to be my own boss so I was always a bit skeptical about the educational system that teaches you how to be a good employee. Having this in mind, I decided to go study art in France, a field I am passionate about in a country I like. I did this because I was thinking that entrepreneurship it’s a self-taught profession for which I don’t need an educational background - so if I choose to study something, I might as well study something I am passionate about. While in France I started my first real entrepreneurial project, an e-commerce platform. Sooner or later I realised the importance of having a business education if you want to be an entrepreneur, so I decided to come back to Romania and join EA, a new and innovative university. And I don’t regret it.",
  },
  {
    img: Image4,
    name: "Octavian Sicoe",
    year: "Year II Student",
    text: "I have chosen this University for the sole reason that I thought that being around this community for the next 4 years will be much more valuable than any University in Romania or abroad. Along with these awesome people that I met, I have created experiences of all kinds that helped me grow on personal and business levels. For me, it is all about people, and I found here the right ones. They challenged, taught, and guided me towards the person I am today.",
  },
  {
    img: Image5,
    name: "Horia Stupu",
    year: "Alumni",
    text: "The Entrepreneurship Academy made me who I am today. This university helped me in learning how to grow day by day, to create a network of highly intelligent and skilled people, to gain self-confidence and develop a business with the best team I could ever imagine. After four years of being a student at EA, I find myself as the co-founder of Different agency, a digital services provider for relentless businesses, that generated over 250.000 euro in revenues in the last 2 years. Looking back, I believe that joining this university was one of the best decisions I took in my life.",
  },
  {
    img: Image6,
    name: "Alex Burghelia",
    year: "Alumni",
    text: "All the knowledge that I needed in order to start and serve more than 5000+ clients comes from The Entrepreneurship Academy’s courses, team-sessions, experts sessions, networking opportunities, events, coaching, learning journeys and the way I was encouraged to apply things in real life. Looking back, I believe that joining this university was one of the best decisions I took in my life.",
  },
  {
    img: Image7,
    name: "Teodora Popa",
    year: "Year IV Student",
    text: "I went to Computer Science College in the Netherlands. I stayed there for a year, and then I decided to come back to Romania and applied to EA. I was very attracted to the way we learn here. The educational program is established alongside the students, and each course is specially created based on the needs we have in business at the time of the course. For example, in year 1 we were learning about the legislation and the process of opening an SRL - exactly when we open our companies, and the idea of​​learning by doing is very well implemented in our university.",
  },
  {
    img: Image8,
    name: "Petrișor Răzvan Cătălin",
    year: "Alumni",
    text: "At The Entrepreneurship Academy, I had the opportunity to find out what entrepreneurship really means, primarily through practice, but also from experts and entrepreneurs. I worked on various entrepreneurial projects and discovered new areas from which I learned and still learn a lot. Mostly, I like that we are not limited to business discussions, but we found and worked on our own businesses, and we can directly apply all the theory learned in courses directly. In addition, we have a community of experts and mentors who are always open to helping and guiding us.",
  },
];

function AdmissionSlider() {
  return (
    <div>
      <div className="max-w-6xl mx-auto relative z-10 w-full text-center mb-15 px-4">
        <h2 className="text-black text-3xl md:text-4xl mt-10 font-semibold">
          Admission procedure
        </h2>
        <div className="w-18 h-1 bg-black mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="relative h-auto bg-[#055959] py-10 sm:py-16 md:py-20 px-4 z-0 flex items-center">
        <div className="w-full max-w-5xl mx-auto relative z-10">
          <Swiper
            className="p-10"
            modules={[Autoplay, Pagination, Navigation]} // <-- Add Navigation here
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
          >
            {admissionSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-stretch pt-7">
                  <div className="w-100% justify-center relative rounded-xl overflow-hidden shadow-2xl bg-white p-4 sm:p-6 md:p-10 flex flex-col lg:h-[30rem]">
                    <div className="flex flex-col md:flex-row md:gap-6 items-center md:items-start">
                      {/* Text first on mobile */}
                      <div className="w-full md:w-2/3 mt-4 md:mt-0 order-1 lg:mr-20 md:order-2">
                        <RiDoubleQuotesL className="text-4xl text-cyan-700 mb-4" />
                        <p className="text-base sm:text-lg text-[1rem] text-gray-700 leading-relaxed text-center md:text-left">
                          {slide.text}
                        </p>
                      </div>
                      {/* Image and details */}
                      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mt-6 md:mt-0 order-2 md:order-1 lg:ml-20">
                        <img
                          src={slide.img}
                          alt={slide.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full"
                        />
                        <div className="text-center">
                          <h3 className="text-lg sm:text-xl font-bold mt-4 md:text-left">
                            {slide.name}
                          </h3>
                          <div className="w-10 h-1 bg-green-950 mx-auto rounded-2xl my-2 hidden md:block"></div>
                          <p className="text-sm sm:text-base text-gray-600">
                            {slide.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
      </div>
      <div className="w-35 h-10 mb-5 bg-[#00007A] mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

export default AdmissionSlider;
