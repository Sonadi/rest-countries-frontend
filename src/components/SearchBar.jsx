import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-10">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <svg
          className="h-6 w-6 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search countries by name..."
        onChange={handleInputChange}
        className="w-full pl-12 pr-20 py-4 text-lg text-white placeholder-gray-400 border border-gray-600 bg-gray-800 rounded-xl shadow-lg focus:outline-none focus:ring-3 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-500"
      />
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
        <button 
          type="button"
          className="px-4 py-2 text-base text-gray-300 hover:text-blue-400 transition-all duration-200 font-medium hover:bg-gray-700 rounded-lg"
          onClick={() => onSearch('')}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;