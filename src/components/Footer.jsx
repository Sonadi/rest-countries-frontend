import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-950 border-t border-blue-800/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand/Logo Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 transition-all">
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
            <p className="text-blue-200 text-sm leading-relaxed">
              Your comprehensive guide to world countries, statistics, and information.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-blue-100 font-bold text-lg tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> Countries
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> Favorites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> About
                </Link>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-blue-100 font-bold text-lg tracking-wider uppercase">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> GitHub Repo
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> Data Sources
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-300 hover:text-white transition-colors flex items-center">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400"></i> Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-blue-100 font-bold text-lg tracking-wider uppercase">Stay Updated</h3>
            <p className="text-blue-200 text-sm">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="mt-2 space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-blue-900/50 border border-blue-700 rounded-lg text-blue-100 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} WorldLookup. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;