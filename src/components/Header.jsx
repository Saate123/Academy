import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import Logo from "../assets/Logo.svg"; // Replace with actual path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Entrepreneurship Academy" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-900 font-medium hover:underline">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-900 font-medium hover:underline"
          >
            About 
          </a>
          <a
            href="/events"
            className="text-gray-900 font-medium hover:underline"
          >
            Events
          </a>
          <a href="/blog" className="text-gray-900 font-medium hover:underline">
            Blog 
          </a>
          <a
            href="/contact"
            className="text-gray-900 font-medium hover:underline"
          >
            Contact
          </a>
        </nav>

        {/* Right Buttons & Language Selector (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="border-2 border-blue-900 px-4 py-2 rounded-full text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition">
            About Admission
          </button>
          <button className="bg-blue-900 px-4 py-2 rounded-full text-white font-bold hover:opacity-80 transition">
            Download the brochures 
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-900 text-2xl mr-7"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full flex flex-col items-center py-6 space-y-4">
          <a href="/" className="text-gray-900 font-medium hover:underline">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-900 font-medium hover:underline"
          >
            About 
          </a>
          <a
            href="/events"
            className="text-gray-900 font-medium hover:underline"
          >
            Events
          </a>
          <a href="/blog" className="text-gray-900 font-medium hover:underline">
            Blog 
          </a>
          <a
            href="/contact"
            className="text-gray-900 font-medium hover:underline"
          >
            Contact
          </a>
          <button className="border-2 border-blue-900 px-4 py-2 rounded-full text-blue-900 font-bold hover:bg-blue-900 hover:text-white transition">
            About Admission
          </button>
          <button className="bg-blue-900 px-4 py-2 rounded-full text-white font-bold hover:opacity-80 transition">
            Download the brochures 
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
