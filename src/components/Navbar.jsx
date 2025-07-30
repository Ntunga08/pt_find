import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-teal-500 to-green-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Site Name */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl">💼</div>
            <div>
              <a href="/" className="text-2xl font-bold text-white hover:text-teal-100 transition-colors duration-300">
                JobConnect
              </a>
              <div className="text-xs text-teal-100 font-light">
                Find Your Future
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="relative text-white hover:text-teal-100 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>🏠</span>
                <span>HOME</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/internships" 
              className="relative text-white hover:text-teal-100 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>💼</span>
                <span>INTERNSHIPS</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/PT" 
              className="relative text-white hover:text-teal-100 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>🎓</span>
                <span>PRACTICAL TRAINING</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/about" 
              className="relative text-white hover:text-teal-100 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>🛍️</span>
                <span>ABOUT US </span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/contact" 
              className="relative text-white hover:text-teal-100 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>📞</span>
                <span>CONTACT</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-teal-300">
              <a 
                href="/login" 
                className="text-white hover:text-teal-100 transition-colors duration-300 font-medium"
              >
                Sign In
              </a>
              <a 
                href="/register" 
                className="bg-white hover:bg-teal-50 text-teal-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 border-2 border-white hover:border-teal-100"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-teal-100 transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`w-6 h-6 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden mt-6 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-teal-200 shadow-2xl">
            <a 
              href="/" 
              className="flex items-center space-x-3 text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🏠</span>
              <span className="font-medium">HOME</span>
            </a>
            
            <a 
              href="/internships" 
              className="flex items-center space-x-3 text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">💼</span>
              <span className="font-medium">INTERNSHIPS</span>
            </a>
            
            <a 
              href="/PT" 
              className="flex items-center space-x-3 text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🎓</span>
              <span className="font-medium">RESOURCES</span>
            </a>
            
            <a 
              href="/about" 
              className="flex items-center space-x-3 text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🛍️</span>
              <span className="font-medium">SHOP</span>
            </a>
            
            <a 
              href="/contact" 
              className="flex items-center space-x-3 text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">📞</span>
              <span className="font-medium">CONTACT</span>
            </a>
            
            <div className="pt-4 border-t border-teal-200 space-y-3">
              <a 
                href="/login" 
                className="block text-teal-700 hover:text-teal-900 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-teal-50 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </a>
              <a 
                href="/register" 
                className="block bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-center border-2 border-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;