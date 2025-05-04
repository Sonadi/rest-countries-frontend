import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';  // To wrap the Navbar in a Router context
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar and Logo', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the brand name "WorldLookup" is rendered
    const brandText = screen.getByText(/WorldLookup/i);
    expect(brandText).toBeInTheDocument();

    // Check if the logo (globe icon) is rendered
    const logoIcon = screen.getByRole('img');
    expect(logoIcon).toBeInTheDocument();
  });

  test('renders navigation links with correct classes', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if navigation links are rendered with the correct text
    const countriesLink = screen.getByText(/Countries/i);
    expect(countriesLink).toBeInTheDocument();
    expect(countriesLink).toHaveClass('text-gray-300'); // Initial state when not active

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveClass('text-gray-300'); // Initial state when not active
  });

  test('highlights active link based on pathname', () => {
    window.history.pushState({}, 'Test page', '/about'); // Set initial URL to "/about"
    
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the "About" link has the correct active class
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toHaveClass('bg-blue-600 text-white shadow-md'); // Active state

    // Check if the "Countries" link does NOT have the active class
    const countriesLink = screen.getByText(/Countries/i);
    expect(countriesLink).not.toHaveClass('bg-blue-600 text-white shadow-md');
  });

  test('updates navbar style on scroll', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Initially, the navbar should not have the "scrolled" styles
    const navbar = screen.getByRole('navigation');
    expect(navbar).not.toHaveClass('bg-gray-800/95');

    // Simulate scroll
    fireEvent.scroll(window, { target: { scrollY: 20 } });

    // After scroll, the navbar should have the "scrolled" styles
    expect(navbar).toHaveClass('bg-gray-800/95');
  });

  test('mobile menu button renders correctly', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Check if the mobile menu button is rendered (hamburger icon)
    const mobileMenuButton = screen.getByRole('button');
    expect(mobileMenuButton).toBeInTheDocument();

    // Ensure it has the correct icon (hamburger)
    const icon = mobileMenuButton.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });
});
