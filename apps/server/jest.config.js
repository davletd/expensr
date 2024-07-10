// apps/backend/jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
	roots: ['./src'],
	testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node'],
	modulePathIgnorePatterns: ['./dist/'],
	transformIgnorePatterns: ['./node_modules/'],
};
