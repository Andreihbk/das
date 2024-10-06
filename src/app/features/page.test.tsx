import React from 'react';
import { render, screen } from '@testing-library/react';
import Features from './page'; // Adjust the import based on your file structure

describe('Features Component', () => {
  beforeEach(() => {
    render(<Features />);
  });

  it('renders the heading', () => {
    const heading = screen.getByText(/our features/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the feature cards', () => {
    const featureTitles = [
      "Custom Solutions",
      "24/7 Support",
      "Data Security"
    ];

    featureTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('renders the feature descriptions', () => {
    const featureDescriptions = [
      "We offer tailor-made solutions that fit your specific business requirements.",
      "Our dedicated support team is available around the clock to assist you.",
      "We prioritize data security and ensure your information is protected."
    ];

    featureDescriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('renders the back to home link', () => {
    const backLink = screen.getByRole('link', { name: /back to home/i });
    expect(backLink).toBeInTheDocument();
  });

  it('renders the feature images', () => {
    const featureImages = [
      { title: "Custom Solutions", src: "/z.jpg" },
      { title: "24/7 Support", src: "/clock.jpg" },
      { title: "Data Security", src: "/data.jpg" },
    ];
  
    featureImages.forEach(({ title, src }) => {
      const imgElement = screen.getByAltText(title);
      // Check if the src starts with the Next.js image path pattern
      expect(imgElement).toHaveAttribute('src', expect.stringContaining(`url=%2F${src.slice(1)}`));
    });
  });
});
