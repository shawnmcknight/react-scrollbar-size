const { BABEL_ENV, NODE_ENV } = process.env;
const isTest = (BABEL_ENV || NODE_ENV) === 'test';
const isDebug = (BABEL_ENV || NODE_ENV) === 'debug';
const isCoverage = (BABEL_ENV || NODE_ENV) === 'coverage';
const isNode = isCoverage || isDebug || isTest;

// target `node` for coverage, debug, and test environments
// non test environments will rely on `.browserslistrc` for targets
// core-js will be used to polyfill anything used in our code that is not implemented in the supported browsers
const envPreset = [
	'@babel/preset-env',
	{
		useBuiltIns: 'usage',
		corejs: { version: 3 },
		shippedProposals: true,
		...(isNode && { targets: { node: true } }),
	},
];

module.exports = {
	ignore: ['**/*.d.ts'],
	env: {
		build: { ignore: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**'] },
		debug: { sourceMaps: true, retainLines: true },
		production: {
			// remove `data-testid` attributes defined for `@testing-library/react`
			plugins: [['react-remove-properties', { properties: ['data-testid'] }]],
		},
	},
	presets: [envPreset, '@babel/preset-react', '@babel/typescript'],
};
