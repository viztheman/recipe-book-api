import DotEnv from 'dotenv';
DotEnv.config();

import IOC from './lib/IOC.js';

async function main() {
	var main = IOC.resolve('main');
	await main.run();
}
main();
