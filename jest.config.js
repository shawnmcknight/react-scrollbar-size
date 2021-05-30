module.exports = {
	testEnvironment: 'jsdom',
	resetMocks: true, // clear history and reset behavior of mocks between each test
	restoreMocks: true, // restore initial behavior of mocked functions
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	setupFilesAfterEnv: ['./test/jest-setup.ts'],
	collectCoverageFrom: [
		'**/src/**/*.ts', // typescript files
		'**/src/**/*.tsx', // typescript files that render JSX
		'!**/src/**/index.ts', // do not cover index export files
	],
	coverageThreshold: {
		global: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100,
		},
	},
	timers: 'modern',
};
