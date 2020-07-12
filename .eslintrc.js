module.exports = {
	extends: [
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	env: { browser: true, es6: true, node: true, jest: true },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react-hooks', 'jest'],
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
			files: ['**/scripts/**', '**/example/**', '**/__tests__/**', '**/*.test.ts'],
			rules: {
				// allow dev dependencies
				'import/no-extraneous-dependencies': [
					'error',
					{ devDependencies: true, optionalDependencies: false, peerDependencies: false },
				],
			},
		},
	],
};
