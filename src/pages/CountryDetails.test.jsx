import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import CountryDetails from '../components/CountryDetails';
import * as api from '../services/countriesAPI';

jest.mock('../services/countriesAPI');

test('integration: renders full country details via API and context', async () => {
  const mockCountry = {
    name: { common: 'France' },
    capital: ['Paris'],
    region: 'Europe',
    population: 67000000,
    flags: { svg: 'https://flagcdn.com/fr.svg' },
    languages: { fra: 'French' },
  };

  api.fetchCountryByCode.mockResolvedValue(mockCountry);

  const addRecentCountryMock = jest.fn();

  render(
    <MemoryRouter initialEntries={['/country/FR']}>
      <UserContext.Provider value={{ username: 'testuser', addRecentCountry: addRecentCountryMock, searchHistory: [] }}>
        <Routes>
          <Route path="/country/:code" element={<CountryDetails />} />
        </Routes>
      </UserContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/Loading country details/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('France')).toBeInTheDocument();
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    expect(screen.getByText(/Europe/)).toBeInTheDocument();
    expect(screen.getByText(/French/)).toBeInTheDocument();
  });

  expect(addRecentCountryMock).toHaveBeenCalledWith('France');
});

