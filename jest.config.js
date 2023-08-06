module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
