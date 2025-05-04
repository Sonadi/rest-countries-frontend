const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    if (!response.ok) throw new Error('Failed to fetch countries');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchCountryByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    if (!response.ok) throw new Error('Country not found');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCountriesByRegion = async (region) => {
  try {
    const response = await fetch(`${BASE_URL}/region/${region}`);
    if (!response.ok) throw new Error('Failed to fetch region');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCountryByCode = async (code) => {
  try {
    const response = await fetch(`${BASE_URL}/alpha/${code}`);
    if (!response.ok) throw new Error('Failed to fetch country');
    const data = await response.json();
    return data[0]; // single country object
  } catch (error) {
    console.error(error);
    return null;
  }
};

