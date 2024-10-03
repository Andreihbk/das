import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page'; // Adjusted import to point to `page.tsx`

describe('Home Component', () => {
  it('should render the main elements correctly', () => {
    render(<Home />);

    // Check if the logo image is displayed
    const logo = screen.getByAltText(/business logo/i);
    expect(logo).toBeInTheDocument();

    // Check if the "About Us" link is displayed
    const aboutLink = screen.getByText(/about us/i);
    expect(aboutLink).toBeInTheDocument();

    // Check if the "Contact Us" link is displayed
    const contactLink = screen.getByText(/contact us/i);
    expect(contactLink).toBeInTheDocument();
  });

  it('should render the deployment button with the correct text', () => {
    render(<Home />);

    const deployButton = screen.getByText(/deploy now/i);
    expect(deployButton).toBeInTheDocument();
    expect(deployButton.closest('a')).toHaveAttribute(
      'href',
      'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    );
  });

  it('should render the Learn, Examples, and Go to nextjs.org links in the footer', () => {
    render(<Home />);

    const learnLink = screen.getByText(/learn/i);
    expect(learnLink).toBeInTheDocument();

    const examplesLink = screen.getByText(/examples/i);
    expect(examplesLink).toBeInTheDocument();

    const goToNextLink = screen.getByText(/go to nextjs.org/i);
    expect(goToNextLink).toBeInTheDocument();
  });

  it('should render the text to edit the source file correctly', () => {
    render(<Home />);

    const codeElement = screen.getByText(/get started by editing/i);
    expect(codeElement).toBeInTheDocument();
  });
});
