import React, { createContext, useState, useEffect, useContext } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE;
export const UserContext = createContext();
// Create a custom hook for easier consumption
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || ''); // Changed to localStorage
  const [recentCountries, setRecentCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const logout = () => {
    localStorage.removeItem('username');
    setUsername('');
    setRecentCountries([]);
    // Don't clear entire localStorage as it might contain other app data
  };

  const login = (username) => {
    setUsername(username);
    localStorage.setItem('username', username);
  };
  
  const fetchSearchHistory = async () => {
    const username = localStorage.getItem('username');
    if (!username) {
      console.log('No username found, skipping fetch.');
      return;
    }
  
    try {
      const res = await fetch(`${API_BASE}/api/history/${username}`);
      const data = await res.json();
      console.log('Fetched history data:', data);

      const historyArray = Array.isArray(data.history) ? data.history : data;
      setRecentCountries(historyArray);
      console.log('Updated recent countries:', historyArray);
    } catch (err) {
      console.error('Failed to fetch history:', err);
    }
  };
  
  useEffect(() => {
    fetchSearchHistory();
  }, [username]); // Add username to dependency array to refetch when it changes

  const addSearchTerm = async (term) => {
    const us = localStorage.getItem('username');
    console.log(us)
    if (!us || searchHistory.includes(term)) return;
    try {
      await fetch(`${API_BASE}/api/history/${us}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ us, term }),
      });
      fetchSearchHistory();
    } catch (err) {
      console.error('Failed to add search term', err);
    }
  };

  const addRecentCountry = (code) => {
    const updated = [...new Set([code, ...recentCountries])].slice(0, 5);
    setRecentCountries(updated);
  };
  
  const clearSearchHistory = () => {
    setRecentCountries([]);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        login, // Make sure to expose login function
        logout,
        searchHistory,
        fetchSearchHistory,
        addSearchTerm,
        clearSearchHistory,
        recentCountries,
        addRecentCountry,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;