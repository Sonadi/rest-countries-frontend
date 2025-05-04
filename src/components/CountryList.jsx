import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries, onCountryClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 py-8 max-w-7xl mx-auto">
      {countries.map((country) => (
        <CountryCard 
          key={country.cca3} 
          country={country} 
          onClick={onCountryClick} 
        />
      ))}
    </div>
  );
};

export default CountryList;