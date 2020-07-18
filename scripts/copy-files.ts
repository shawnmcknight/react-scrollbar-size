/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';

/** List of files to copy to build folder */
const files = ['README.md', 'CHANGELOG.md', 'LICENSE'];

/** Resolve the build folder path */
const resolveBuildPath = (file: string) =>
	path.resolve(process.cwd(), './build', path.basename(file));

/** Copy a file */
const copyFile = async (file: string) => {
	const buildPath = resolveBuildPath(file);

	await fse.copy(file, buildPath);
	console.log(`Copied ${file} to ${buildPath}`);
};

/** Create a minimal package.json file in the build folder */
const createPackageFile = async () => {
	const packageFile = await fse.readFile(path.resolve(process.cwd(), './package.json'), 'utf8');
	const {
		name,
		version,
		description,
		main,
		repository,
		keywords,
		author,
		license,
		bugs,
		homepage,
		peerDependencies,
		dependencies,
	} = JSON.parse(packageFile);

	const minimalPackage = JSON.stringify(
		{
			name,
			version,
			description,
			main,
			repository,
			keywords,
			author,
			license,
			bugs,
			homepage,
			peerDependencies,
			dependencies,
		},
		null,
		'\t',
	);

	const buildPath = resolveBuildPath('package.json');
	await fse.writeFile(buildPath, minimalPackage);
	console.log(`Created package.json in ${buildPath}`);
};

// launch copy tasks
(async () => {
	await Promise.all([createPackageFile(), Promise.all(files.map((file) => copyFile(file)))]);
	console.log('Copy files complete');
})();
