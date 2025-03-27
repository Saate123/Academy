import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Img from "../assets/logo_nn.webp";
import Img2 from "../assets/stil-diamonds.svg";
import Img3 from "../assets/BISM-logo.webp";
import Img4 from "../assets/team-academy.webp";
import Img5 from "../assets/logo-bizilive-500.webp";
import Img6 from "../assets/logo-startarium.webp";
import Image from "../assets/Logo.svg";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Partners Section */}
      <div className="py-6 border-b border-gray-300 text-center">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          PARTENERII NOȘTRI
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4">
          <img
            src={Img}
            alt="NN"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
          <img
            src={Img2}
            alt="STIL Diamonds"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
          <img
            src={Img3}
            alt="BiSM"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
          <img
            src={Img4}
            alt="Team Academy"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
          <img
            src={Img5}
            alt="Biz"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
          <img
            src={Img6}
            alt="Startarium"
            className="h-10 w-auto object-contain filter grayscale brightness-75 transition duration-300 hover:filter-none"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <div>
            <img src={Image} alt="Logo" className="h-12 w-auto" />
          </div>
          <p className="text-sm mt-2">
            <a
              href="https://maps.google.com"
              className="text-blue-600 hover:underline"
            >
              Semilunei Street, No. 4-6, District 2, Bucharest, Romania
            </a>
          </p>
          <p className="mt-2 font-semibold">+40 318 142 927</p>
          <p className="mt-1">
            <a
              href="mailto:info@entreprenation.ro"
              className="text-blue-600 hover:underline font-semibold"
            >
              info@entreprenation.ro
            </a>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold">About</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Accreditation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Admission
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Curriculum
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Methodology
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Coaches
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Student Achievements
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tuition Fees
              </a>
            </li>
          </ul>
        </div>

        {/* EA Experience */}
        <div>
          <h3 className="text-lg font-semibold">EA Experience</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                24h Challenges
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                International Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Relevant Info */}
        <div>
          <h3 className="text-lg font-semibold">Relevant Info</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Chat with us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Referral Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download Brochure
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                We have Cookies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Video Surveillance
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-blue-900 text-white py-4 text-left flex items-center">
        <p className="text-sm mr-2">
          Entrepreneurship Academy © Copyright 2024. All Rights Reserved
        </p>
        <div className="flex justify- gap-4 mt-2">
          <a href="#" className="hover:text-gray-300">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaLinkedinIn className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter className="text-lg" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaYoutube className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
