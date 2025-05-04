import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-6 relative">
      <select
        onChange={handleChange}
        className="appearance-none w-full sm:w-72 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200 cursor-pointer pr-10"
      >
        <option value="" className="text-gray-400 dark:text-gray-400">Filter by region</option>
        {regions.map((region) => (
          <option 
            key={region} 
            value={region}
            className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 py-2"
          >
            {region}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 dark:text-gray-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default RegionFilter;