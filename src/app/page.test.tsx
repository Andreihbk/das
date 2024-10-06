import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // Ensure the path points to `page.tsx`

jest.useFakeTimers();

describe('Home Component', () => {
  beforeEach(() => {
    render(<Home />);
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('should display the spinner initially and then show the main content', () => {
    // Check if the spinner is displayed initially
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Fast-forward timers to remove spinner and display content
    act(() => {
      jest.runAllTimers();
    });

    // Spinner should be removed
    expect(screen.queryByRole('status')).not.toBeInTheDocument();

    // Check the presence of main content elements
    expect(screen.getByText(/welcome to our business/i)).toBeInTheDocument();
  });

  it('should render the image section correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Validate if the business logo is displayed
    expect(screen.getByAltText(/business logo/i)).toBeInTheDocument();
  });

  it('should render the main navigation links correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Use a container to scope the query to the navigation menu
    const navbar = screen.getByRole('navigation');

    // Validate presence of key navigation links within the navigation menu
    expect(navbar).toHaveTextContent(/home/i);
    expect(navbar).toHaveTextContent(/about/i);
    expect(navbar).toHaveTextContent(/contact/i);
  });

  it('should render the Contact Us button in the call-to-action section', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Validate multiple "Contact Us" buttons are rendered
    const contactButtons = screen.getAllByRole('link', { name: /contact us/i });

    // Check the first instance as the main call-to-action button
    const callToActionButton = contactButtons[0];
    expect(callToActionButton).toBeInTheDocument();
    expect(callToActionButton).toHaveAttribute('href', '/contact');
  });

  it('should render the Navbar and Footer components correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Check if Navbar is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Check if Footer is present
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render the hero section content correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Validate the hero section's heading and subheading
    expect(screen.getByText(/welcome to our business/i)).toBeInTheDocument();
    expect(screen.getByText(/we provide the best solutions for your needs/i)).toBeInTheDocument();
  });

  it('should render the additional content section correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Validate the presence of more information heading
    expect(screen.getByText(/more information/i)).toBeInTheDocument();

    // Check if additional paragraphs are present
    const paragraphs = screen.getAllByText(/lorem ipsum|duis dapibus|morbi auctor/i);
    expect(paragraphs.length).toBeGreaterThan(0);
  });

  it('should render the features card section correctly', () => {
    act(() => {
      jest.runAllTimers();
    });

    // Use getAllByRole to target the heading in the features card section
    const featuresHeadings = screen.getAllByRole('heading', { name: /features/i });
    expect(featuresHeadings.length).toBe(1); // Ensure there's only one matching heading
  });
});
