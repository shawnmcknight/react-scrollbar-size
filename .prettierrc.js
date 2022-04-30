module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: false,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	overrides: [
		{
			files: ['*.{cjs,mjs,js,jsx,ts,tsx,d.ts,css,html}'],
			options: {
				useTabs: true,
			},
		},
	],
};
