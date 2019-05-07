const Page = require('./pageAdapter');
const path = require('path');
const fs = require('fs');

const { store } = require(path.resolve(process.cwd(), 'config.json'));
const filePath = `${store.path}/${store.filename}`;

module.exports = new Page({
	async read() {
		const isExist = fs.existsSync(filePath);
		
		if (!isExist) {
			throw new Error('The store is not existed.');
		}

		const isFile = fs.statSync(filePath).isFile();

		if (isFile) {
			const result = fs.readFileSync(filePath, {
				encoding: 'utf8'
			});

			if (result !== '') {
				return JSON.parse(result);
			}
		}

		return [];
	}
});