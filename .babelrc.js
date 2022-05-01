const commonPresets = [['@babel/preset-react', { runtime: 'automatic' }], '@babel/typescript'];

module.exports = {
	ignore: ['**/*.d.ts'],
	presets: [['@babel/preset-env', { targets: { node: true } }], ...commonPresets], // set base presets
	plugins: ['@babel/plugin-transform-runtime'],
	env: {
		build: {
			presets: ['@babel/preset-env', ...commonPresets], // override to target .browserslistrc
			ignore: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'], // do not build test files
		},
		debug: { sourceMaps: true, retainLines: true },
	},
};
