import React from 'react'; // Add this line
import { render, screen } from '@testing-library/react';
import Services from './page'; // Adjust the path if necessary

describe('Services Component', () => {
  beforeEach(() => {
    render(<Services />);
  });

  it('renders the service images', () => {
    const serviceImages = [
      { title: "Web Development", src: "/web.jpg" },
      { title: "Mobile App Development", src: "/phone.jpg" },
      { title: "Digital Marketing", src: "/digital.jpg" },
    ];

    serviceImages.forEach(({ title, src }) => {
      const imgElement = screen.getByAltText(title);
      // Check if the src starts with the Next.js image path pattern
      expect(imgElement).toHaveAttribute('src', expect.stringContaining(`url=%2F${src.slice(1)}`));
    });
  });

  it('renders the service titles and descriptions', () => {
    const services = [
      {
        title: "Web Development",
        description: "We build responsive and modern websites tailored to your business needs.",
      },
      {
        title: "Mobile App Development",
        description: "Our team creates user-friendly mobile applications for both Android and iOS.",
      },
      {
        title: "Digital Marketing",
        description: "We offer comprehensive digital marketing strategies to grow your online presence.",
      },
    ];

    services.forEach(({ title, description }) => {
      const titleElement = screen.getByText(title);
      const descriptionElement = screen.getByText(description);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
