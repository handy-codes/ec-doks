// components/Header.tsx
"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  careersRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  aboutRef,
  servicesRef,
  careersRef,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">EC DOKS</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(careersRef)}
            className={`${
              isScrolled
                ? "text-gray-700 hover:text-blue-600"
                : "text-white hover:text-blue-200"
            } transition-colors`}
          >
            Careers
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-8 h-1 rounded transition-all duration-300 ${
              isScrolled ? "bg-[#1E40AF]" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-8 h-1 rounded transition-all duration-300 ${
              isScrolled ? "bg-[#1E40AF]" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-8 h-1 rounded transition-all duration-300 ${
              isScrolled ? "bg-[#1E40AF]" : "bg-white"
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden shadow-lg absolute top-full left-0 right-0 ${
            isScrolled ? "bg-white" : "bg-black bg-opacity-80"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsMenuOpen(false);
              }}
              className={`${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors text-left`}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection(aboutRef);
                setIsMenuOpen(false);
              }}
              className={`${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors text-left`}
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection(servicesRef);
                setIsMenuOpen(false);
              }}
              className={`${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors text-left`}
            >
              Services
            </button>
            <button
              onClick={() => {
                scrollToSection(careersRef);
                setIsMenuOpen(false);
              }}
              className={`${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white hover:text-blue-200"
              } transition-colors text-left`}
            >
              Careers
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
