import React from 'react'; // Ensure React is imported
import { render, screen } from '@testing-library/react';
import Home from './page'; // Adjust to the actual path of your component
import Navbar from './components/Navbar';

// Mock IntersectionObserver to prevent errors in the test environment
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Home Component', () => {
  it('should render the main heading correctly', () => {
    render(<Home />);
    const welcomeText = screen.getByText(/welcome to das/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it('should render the image section correctly', () => {
    render(<Home />);
    const imageSection = screen.getByAltText(/business logo/i); 
    expect(imageSection).toBeInTheDocument();
  });

  it('should render the navigation links', () => {
    render(<Navbar />);
    
    // Check that the <nav> element exists
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Get all links and check their texts
    const links = screen.getAllByRole('link');
    
    // Check for Home link
    const homeLink = links.find(link => link.textContent === 'Home');
    expect(homeLink).toBeInTheDocument();

    // Check for About link
    const aboutLink = links.find(link => link.textContent === 'About');
    expect(aboutLink).toBeInTheDocument();

    // Check for Contact link
    const contactLink = links.find(link => link.textContent === 'Contact');
    expect(contactLink).toBeInTheDocument();
});
});
