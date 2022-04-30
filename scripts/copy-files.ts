/* eslint-disable no-console */
import path from 'path';
import fse from 'fs-extra';

/** Build output path */
const buildPath = path.resolve(process.cwd(), './dist');

/** Create a minimal package.json file in the build folder */
const createPackageFile = async (): Promise<void> => {
	const source = path.resolve(process.cwd(), './package.json');
	const packageFile = await fse.readFile(source, 'utf8');
	const { scripts, devDependencies, prettier, ...packageDataOther } = JSON.parse(packageFile);

	const newPackageData = {
		...packageDataOther,
		private: false,
	};

	const minimalPackage = JSON.stringify(newPackageData, null, 2);

	const target = path.resolve(buildPath, './package.json');

	await fse.writeFile(target, minimalPackage, 'utf8');
	console.log(`Created package.json in ${target}`);
};

/** Copy the specified file to the build folder */
const copyFile = async (fileName: string): Promise<void> => {
	const target = path.resolve(buildPath, path.basename(fileName));
	await fse.copy(fileName, target);

	console.log(`Copied ${fileName} to ${target}`);
};

/** Copy meta files to build folder */
const copyMeta = async (): Promise<void> => {
	const filesToCopy = ['README.md', 'CHANGELOG.md', 'LICENSE'];

	await Promise.all(filesToCopy.map((fileName) => copyFile(fileName)));

	console.log('Successfully copied all meta files');
};

// launch copy tasks
Promise.all([copyMeta(), createPackageFile()])
	.then(() => {
		console.log('All files copied successfully');
	})
	.catch((err) => {
		console.error('Error copying files', err);
	});
