require('@testing-library/jest-dom');

// Suppress console logs during tests
beforeAll(() => {
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
  });
  