import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black border-b-2 border-gray-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Site Name */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl">💼</div>
            <div>
              <a href="/" className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300">
                InternTafuta
              </a>
              <div className="text-xs text-gray-400 font-light">
                Find Your Future
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="relative text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>🏠</span>
                <span>Home</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/internships" 
              className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>💼</span>
                <span>Internships</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/PT" 
              className="relative text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>🎓</span>
                <span>Practical Training</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="/about" 
              className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium group"
            >
              <span className="flex items-center space-x-2">
                <span>ℹ️</span>
                <span>About</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-700">
              <a 
                href="/login" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                Sign In
              </a>
              <a 
                href="/register" 
                className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 border border-green-500"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300 p-2"
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
          <div className="bg-gray-900 backdrop-blur-sm rounded-2xl p-6 space-y-4 border border-gray-800 shadow-2xl">
            <a 
              href="/" 
              className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🏠</span>
              <span className="font-medium">Home</span>
            </a>
            
            <a 
              href="/internships" 
              className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">💼</span>
              <span className="font-medium">Internships</span>
            </a>
            
            <a 
              href="/PT" 
              className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">🎓</span>
              <span className="font-medium">Practical Training</span>
            </a>
            
            <a 
              href="/about" 
              className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="text-lg">ℹ️</span>
              <span className="font-medium">About</span>
            </a>
            
            <div className="pt-4 border-t border-gray-700 space-y-3">
              <a 
                href="/login" 
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-gray-800 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </a>
              <a 
                href="/register" 
                className="block bg-green-600 hover:bg-green-500 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 text-center border border-green-500"
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