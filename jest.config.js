module.exports = {
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'jsx',
  ],
  globals: {
    window: true,
  },
  collectCoverageFrom: ['**/*.jsx', '**/*.js'],
  moduleDirectories: ['node_modules', '.', 'src'],
  testMatch: [
    '**/*.(test|spec).(js)',
    '**/*.(test|spec).(jsx)',
  ],
  coverageReporters: [
    'json',
    'lcov',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/config.js'],
  coveragePathIgnorePatterns: [
    '/server/',
    '/node_modules/',
    '/public/',
    '/dist/',
    '/coverage/',
    'jest.config.js',
    'package.json',
    'webpack.config.js',
    '/src/index.jsx',
    '/src/i18n.js',
    '/src/__tests__',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    '^/src/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  resetModules: true,
};
