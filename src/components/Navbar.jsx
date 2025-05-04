import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/95 shadow-lg py-1 backdrop-blur-sm' : 'bg-gray-900 py-2 border-b border-gray-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand - Updated with new icon and larger text */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className={`p-2 rounded-lg transition-all ${scrolled ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-500/10 group-hover:bg-blue-500/20'}`}>
                  {/* New globe icon with more detail */}
                  <svg
                    className="h-6 w-6 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className={`text-xl font-bold tracking-wide ${scrolled ? 'text-white' : 'text-gray-100'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                  WorldLookup
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg text-base font-medium ${
                  location.pathname === '/'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Countries
              </Link>
              
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg text-base font-medium ${
                  location.pathname === '/about'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="p-1 rounded-md text-gray-300 hover:bg-gray-700/50 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;