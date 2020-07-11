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
	},
};
