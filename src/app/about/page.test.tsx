import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './page'; // Adjust the path based on your directory structure

describe('About Page', () => {
  it('renders the About page with the correct content', () => {
    render(<About />);

    // Check if the heading is rendered
    expect(screen.getByText(/about us/i)).toBeInTheDocument();

    // Check if the welcome message is rendered
    expect(screen.getByText(/welcome to our showcase website/i)).toBeInTheDocument();

    // Check if the quality services message is rendered
    expect(screen.getByText(/dedicated to providing quality services and products/i)).toBeInTheDocument();
  });

  it('renders the Navbar component', () => {
    render(<About />);

    // Check if the Navbar is rendered
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });
});
