import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-700 bg-opacity-90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Site Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="text-slate-700 text-lg font-bold">IC</div>
            </div>
            <div>
              <a href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
                INTERNCONNECT
              </a>
            </div>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              Home
            </a>
            
            <a 
              href="/about" 
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              About
            </a>
            
            <a 
              href="/internships" 
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              Internships
            </a>
            
            <a 
              href="/contact" 
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="/register" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Plan Your Future
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-200 transition-colors duration-300 p-2"
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
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-6 space-y-4 shadow-xl">
            <a 
              href="/" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            
            <a 
              href="/about" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            
            <a 
              href="/internships" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Internships
            </a>
            
            <a 
              href="/contact" 
              className="block text-slate-700 hover:text-slate-900 transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            <div className="pt-4 border-t border-gray-200">
              <a 
                href="/register" 
                className="block bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Plan Your Future
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;