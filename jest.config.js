module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
  ]
};