import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import UserProvider from './context/UserContext';
//import AboutPage from './pages/AboutPage';
import 'animate.css';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <div>
      <Toaster position="top-center" richColors />
       <UserProvider>
       <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetails />} />
       
      </Routes>
       </UserProvider>
     
    </div>
  );
};

export default App;
