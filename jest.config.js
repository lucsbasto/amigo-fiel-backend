module.exports = {
  roots: ['<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
