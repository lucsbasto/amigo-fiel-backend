module.exports = {
  roots: ['<rootDir>/test'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
