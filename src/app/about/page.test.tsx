// src/app/about/pages.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './page'; // Adjust the path based on your directory structure

describe('About', () => {
  it('renders the About page with the correct content', () => {
    render(<About />);

    // Check if the heading is rendered
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();

    // Check if the welcome message is rendered
    expect(screen.getByText(/Welcome to our showcase website/i)).toBeInTheDocument();

    // Check if the quality services message is rendered
    expect(screen.getByText(/dedicated to providing quality services and products/i)).toBeInTheDocument();
  });
});
