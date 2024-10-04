import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // Adjusted import to point to `page.tsx`

describe('Home Component', () => {
  beforeEach(() => {
    // Render the Home component before each test
    render(<Home />);
  });

  it('should render the main elements correctly', () => {
    // Check if the spinner is displayed first
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Use a timer to wait for the loading state to change
    jest.advanceTimersByTime(20);

    // Now check if the logo image is displayed
    const logo = screen.getByAltText(/business logo/i);
    expect(logo).toBeInTheDocument();

    // Check if the "Our Services" link is displayed
    const servicesLink = screen.getByText(/our services/i);
    expect(servicesLink).toBeInTheDocument();

    // Check if the "Features" link is displayed
    const featuresLinks = screen.getAllByText(/features/i);
    expect(featuresLinks.length).toBeGreaterThan(0); // Ensures at least one instance is found

    // Check if the "Testimonials" link is displayed
    const testimonialsLinks = screen.getAllByText(/testimonials/i);
    expect(testimonialsLinks.length).toBeGreaterThan(0); // Ensures at least one instance is found
  });

  it('should render the Contact Us button in the call-to-action section', () => {
    // Use a timer to wait for the loading state to change
    jest.advanceTimersByTime(20);

    const contactButton = screen.getByText(/contact us/i);
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render the Navbar and Footer components', () => {
    // Use a timer to wait for the loading state to change
    jest.advanceTimersByTime(20);

    // Check if the Navbar is displayed
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if the Footer is displayed
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();

    const learnLink = screen.getByText(/learn/i);
    expect(learnLink).toBeInTheDocument();

    const examplesLink = screen.getByText(/examples/i);
    expect(examplesLink).toBeInTheDocument();

    const goToNextLink = screen.getByText(/go to nextjs.org/i);
    expect(goToNextLink).toBeInTheDocument();
  });

  it('should render the hero section correctly', () => {
    // Use a timer to wait for the loading state to change
    jest.advanceTimersByTime(20);

    const heroHeading = screen.getByText(/welcome to our business/i);
    expect(heroHeading).toBeInTheDocument();

    const heroSubheading = screen.getByText(/we provide the best solutions for your needs/i);
    expect(heroSubheading).toBeInTheDocument();
  });
});
