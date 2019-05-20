let backend = null;

exports.Page = {
	async read() {
		const pages = await backend.read();
	
		if (!Array.isArray(pages)) {
			throw new Error('The result should be an array.');
		}
	
		return pages;  
	}
};

exports.setBackend = function (newBackend) {
	backend = newBackend;
};