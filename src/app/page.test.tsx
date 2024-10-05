import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // Adjusted import to point to `page.tsx`

// Mock the timer for testing the loading state
jest.useFakeTimers();

describe('Home Component', () => {
  beforeEach(() => {
    // Render the Home component before each test
    render(<Home />);
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear all timers after each test
  });

  it('should display the spinner initially and then the main content', () => {
    // Check if the spinner is displayed first
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Use a timer to wait for the loading state to change
    act(() => {
      jest.runAllTimers(); // Run all timers to simulate the timeout
    });

    // Now check if the spinner is removed and main content is displayed
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    // Check if the main heading is displayed
    const heroHeading = screen.getByText(/welcome to our business/i);
    expect(heroHeading).toBeInTheDocument();
  });

  it('should render the image section correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Check if the logo image is displayed
    const logo = screen.getByAltText(/business logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('should render the main links correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Check if the "Our Services" link is displayed
    const servicesLink = screen.getByText(/our services/i);
    expect(servicesLink).toBeInTheDocument();

    // Check if the "Features" link is displayed
    const featuresLink = screen.getByText(/features/i);
    expect(featuresLink).toBeInTheDocument();

    // Check if the "Testimonials" link is displayed
    const testimonialsLink = screen.getByText(/testimonials/i);
    expect(testimonialsLink).toBeInTheDocument();
  });

  it('should render the Contact Us button in the call-to-action section', () => {
    act(() => {
      jest.runAllTimers();
    });

    const contactButton = screen.getByText(/contact us/i);
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('should render the Navbar and Footer components', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Check if the Navbar is displayed
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    // Check if the Footer is displayed
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('should render the hero section correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    const heroHeading = screen.getByText(/welcome to our business/i);
    expect(heroHeading).toBeInTheDocument();

    const heroSubheading = screen.getByText(/we provide the best solutions for your needs/i);
    expect(heroSubheading).toBeInTheDocument();
  });

  it('should render additional content correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Check for the additional content heading
    const moreInfoHeading = screen.getByText(/more information/i);
    expect(moreInfoHeading).toBeInTheDocument();

    // Check for paragraphs in the additional content section
    const paragraphs = screen.getAllByText(/lorem ipsum|duis dapibus|morbi auctor/i);
    expect(paragraphs.length).toBeGreaterThan(0); // Ensure there's at least one paragraph
  });
});
