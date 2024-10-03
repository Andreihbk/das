module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      // Handle image imports
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
      // Handle CSS imports (optional)
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Adjust the path as necessary
  };
  