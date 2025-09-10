module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]s?$',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};