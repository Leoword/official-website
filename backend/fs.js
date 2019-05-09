const path = require('path');
const fs = require('fs-extra');

const { store } = require(path.resolve('config.json'));
const filePath = `${store.path}/${store.filename}`;

module.exports = {
	async read() {
		const result = [];
		const pageMapping = await fs.readJson(filePath);

		for (let key in pageMapping) {
			result.push(Object.assign({}, {
				id: key
			}, pageMapping[key]));
		}

		return result; 
	}
};