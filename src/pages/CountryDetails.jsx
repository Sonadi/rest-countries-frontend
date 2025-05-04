import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryByCode } from '../services/countriesAPI';
import { UserContext } from '../context/UserContext';

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const { username, addRecentCountry, searchHistory } = useContext(UserContext);

  useEffect(() => {
    const loadCountry = async () => {
      const data = await fetchCountryByCode(code);
      setCountry(data);

      if (username && !searchHistory.includes(code)) {
        addRecentCountry(code);
      }
    };

    loadCountry();
  }, [code, username]);

  if (!country) return <div className="p-6 text-center text-gray-600">Loading country details...</div>;

  const { name, capital, region, population, flags, languages } = country;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-6 text-blue-600 hover:text-blue-800 transition duration-200">
        ← Back to Search
      </Link>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            src={flags?.svg}
            alt={name?.common}
            className="w-full h-64 object-cover md:h-full"
          />
        </div>

        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{name?.common}</h1>

          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">🌍 Region:</span> {region}
            </li>
            <li>
              <span className="font-semibold">🏙️ Capital:</span> {capital?.[0] || 'N/A'}
            </li>
            <li>
              <span className="font-semibold">👥 Population:</span> {population?.toLocaleString()}
            </li>
            <li>
              <span className="font-semibold">🗣️ Languages:</span> {languages ? Object.values(languages).join(', ') : 'N/A'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
