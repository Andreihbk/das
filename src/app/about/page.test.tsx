import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './page';

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

  it('renders the correct sections', () => {
    render(<About />);

    // Check for the "Our Mission" section
    const ourMissionElements = screen.getAllByText(/our mission/i);
    expect(ourMissionElements.length).toBeGreaterThan(0); // Check at least one instance

    // Check for the "Meet the Team" section
    const meetTheTeamElements = screen.getAllByText(/meet the team/i);
    expect(meetTheTeamElements.length).toBeGreaterThan(0); // Check at least one instance

    // Check for "Our History" section
    const ourHistoryElements = screen.getAllByText(/our history/i);
    expect(ourHistoryElements.length).toBeGreaterThan(0); // Check at least one instance
  });
});
