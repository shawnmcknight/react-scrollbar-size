module.exports = {
	extends: [
		'airbnb',
		'plugin:react-hooks/recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	env: { browser: true, es6: true, node: true, jest: true },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jest'],
	rules: {
		// enforce curly brace usage
		curly: ['error', 'all'],
		// enforce consistent sort order
		'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
		// allow .tsx extension
		'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
		// disable import extensions for ts and js files
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		// no-use-before-define does not work with eslint plugin; enable the plugin's rule
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [
		{
			files: ['**/index.*'],
			rules: {
				// allow named export
				'import/prefer-default-export': 'off',
			},
		},
		{
			files: ['**/scripts/**', '**/example/**', '**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
			rules: {
				// allow dev dependencies
				'import/no-extraneous-dependencies': [
					'error',
					{ devDependencies: true, optionalDependencies: false, peerDependencies: false },
				],
			},
		},
		{
			files: ['**/__tests__/**', '**/*.test.ts', '**/*.test.tsx'],
			rules: {
				// disallow use of "it" for test blocks
				'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
				// ensure all tests contain an assertion
				'jest/expect-expect': 'error',
				// no commented out tests
				'jest/no-commented-out-tests': 'error',
				// no duplicate test hooks
				'jest/no-duplicate-hooks': 'error',
				// valid titles
				'jest/valid-title': 'error',
				// no if conditionals in tests
				'jest/no-if': 'error',
				// expect statements in test blocks
				'jest/no-standalone-expect': 'error',
				// disallow returning from test
				'jest/no-test-return-statement': 'error',
				// disallow truthy and falsy in tests
				'jest/no-truthy-falsy': 'error',
				// prefer called with
				'jest/prefer-called-with': 'error',
			},
		},
	],
};
