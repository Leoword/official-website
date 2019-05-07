module.exports = class Page {
	constructor (interfaceInstace) {
		this.interface = interfaceInstace;
	}

	async read() {
		const pages = await this.interface.read();

		if (!Array.isArray(pages)) {
			throw new Error('The result should be an array.');
		}

		return pages;  
	}
};