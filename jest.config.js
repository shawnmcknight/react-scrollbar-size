module.exports = {
	resetMocks: true, // clear history and reset behavior of mocks between each test
	restoreMocks: true, // restore initial behavior of mocked functions
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	collectCoverageFrom: [
		'**/src/*.ts', // test typescript files
		'**/src/*.tsx', // test typescript files that render JSX
		'!**/src/**/index.ts', // do not test index export files
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
