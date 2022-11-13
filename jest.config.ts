import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  automock: false,
  resetMocks: false,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.init.ts']
};

export default createJestConfig(customJestConfig);
