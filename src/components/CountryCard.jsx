import React from 'react';

const CountryCard = ({ country, onClick }) => {
  const { name, flags, population, region, capital, cca3 } = country;
  
  return (
    <div
      onClick={() => onClick(cca3)}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={flags?.svg}
          alt={name?.common}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-blue-600 text-xs font-semibold rounded-full uppercase tracking-wider">
            {region}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {name?.common}
        </h2>
        
        <div className="space-y-3 text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-medium">Capital: <span className="font-normal">{capital?.[0] || 'N/A'}</span></span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Region: <span className="font-normal">{region}</span></span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="font-medium">Population: <span className="font-normal">{population.toLocaleString()}</span></span>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <button className="w-full py-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-800/30 text-blue-600 dark:text-blue-400 rounded-lg transition-colors duration-300 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;