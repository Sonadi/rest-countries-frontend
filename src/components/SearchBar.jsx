import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-300"
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
        className="w-full pl-10 pr-16 py-3 text-white placeholder-gray-300 border border-gray-600 bg-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <button 
          type="button"
          className="px-3 py-1 text-sm text-white hover:text-blue-300 transition-colors duration-200 font-medium"
          onClick={() => onSearch('')}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default SearchBar;