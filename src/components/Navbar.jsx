import React, { useState, useEffect } from "react";
import {navSection} from '../assets/data.js';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isActive, setIsActive] = useState(0);
  const handleScroll = () => {
    let currentIndex = null;

    navSection.forEach(({ id: navSectionId }, index) => {
      const navSection = document.getElementById(navSectionId);
      if (navSection) {
        const navSectionTop = navSection.offsetTop;
        const navSectionHeight = navSection.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= navSectionTop - 50 && scrollPosition < navSectionTop + navSectionHeight - 50) {
          currentIndex = index;
        }
      }
    });

    setIsActive(currentIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="text-white py-4 md:fixed md:top-0 md:left-0 md:w-full md:z-50 bg-[#0A1C3E]">
      <div className="flex justify-between items-center md:px-[8%]">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 w-8 h-8 flex items-center justify-center rounded">
            <span className="text-white text-xl font-bold">A</span>
          </div>
          <span className="text-xl font-bold">SURYAVANSHI</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          {
            navSection.map((nav, indx) => (
                <li key={indx} className={`hover:text-white cursor-pointer border-b-2 ${isActive === indx ? "border-b-2 border-white": "border-transparent"}`}><a href={`${nav.link}`}>{nav.title}</a></li>
            ))
          }
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Hire Me
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center bg-[#0A1C3E] p-4 rounded-lg">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About Me</li>
          <li className="hover:text-white cursor-pointer">Projects</li>
          <li className="hover:text-white cursor-pointer">Services</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg mt-2">
            LET’S TALK
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
