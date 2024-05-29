const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src$1',
  }
}

export default config;
