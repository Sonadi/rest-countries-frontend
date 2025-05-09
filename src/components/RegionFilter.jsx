import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ onFilter }) => {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div className="mb-8 relative">
      <select
        onChange={handleChange}
        className="appearance-none w-full sm:w-80 px-6 py-4 border-2 border-blue-400/30 rounded-xl shadow-lg bg-blue-900/80 backdrop-blur-sm text-blue-100 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 cursor-pointer pr-12"
      >
        <option value="" className="text-blue-200/80">Filter by region</option>
        {regions.map((region) => (
          <option 
            key={region} 
            value={region}
            className="bg-blue-900 text-blue-100 hover:bg-blue-800 py-3"
          >
            {region}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-blue-200">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default RegionFilter;