module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handle image imports
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Handle CSS imports, including `globals.css` at various levels
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  verbose: false, // Enable verbose output in Jest
};
