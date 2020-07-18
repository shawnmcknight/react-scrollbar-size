const commonPresets = ['@babel/preset-react', '@babel/typescript'];

module.exports = {
	ignore: ['**/*.d.ts'],
	presets: [['@babel/preset-env', { targets: { node: true } }], ...commonPresets], // set base presets
	env: {
		build: {
			presets: ['@babel/preset-env', ...commonPresets], // override to target .browserslistrc
			ignore: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'], // do not build test files
		},
		debug: { sourceMaps: true, retainLines: true },
	},
};
