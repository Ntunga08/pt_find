import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo / Site Name */}
        <div className="text-xl font-bold">
          <a href="/">InternTafuta</a>
        </div>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/internships" className="hover:text-yellow-300">Internships</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/login" className="hover:text-yellow-300">Login</a>
        </div>

        {/* Mobile menu icon (optional, for improvement later) */}
      </div>
    </nav>
  );
};

export default Navbar;
