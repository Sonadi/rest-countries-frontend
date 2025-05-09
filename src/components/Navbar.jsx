import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/95 shadow-xl py-1 backdrop-blur-sm' : 'bg-blue-950 py-2 border-b border-blue-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand - Updated with distinctive style */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className={`p-2 rounded-lg transition-all ${scrolled ? 'bg-blue-400/20 group-hover:bg-blue-400/30' : 'bg-blue-400/10 group-hover:bg-blue-400/20'}`}>
                  <svg
                    className="h-7 w-7 text-blue-300"
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
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-blue-200">WORLD</span>
                  <span className="text-blue-300">LOOKUP</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className={`px-5 py-2.5 rounded-lg text-base font-bold transition-all ${
                  location.pathname === '/'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-flag mr-2"></i> Countries
              </Link>
              
              <Link
                to="/favorites"
                className={`px-5 py-2.5 rounded-lg text-base font-bold transition-all ${
                  location.pathname === '/favorites'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-heart mr-2"></i> Favorites
              </Link>
              
              <Link
                to="/about"
                className={`px-5 py-2.5 rounded-lg text-base font-bold transition-all ${
                  location.pathname === '/about'
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-blue-100 hover:bg-blue-800/70 hover:text-white'
                }`}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-info-circle mr-2"></i> About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-blue-200 hover:bg-blue-800 focus:outline-none transition-all"
              >
                {mobileMenuOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900/95 backdrop-blur-sm border-t border-blue-800">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-md text-lg font-bold ${
                  location.pathname === '/'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-flag mr-3"></i> COUNTRIES
              </Link>
              
              <Link
                to="/favorites"
                className={`block px-4 py-3 rounded-md text-lg font-bold ${
                  location.pathname === '/favorites'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-heart mr-3"></i> FAVORITES
              </Link>
              
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-md text-lg font-bold ${
                  location.pathname === '/about'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
              >
                <i className="fas fa-info-circle mr-3"></i> ABOUT
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer */}
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;