const fs = require('fs');
const storage = require('../config').storage;

const Page = class Page {
	constructor(id, path, sectionList, comment) {
		this.id = id;
		this.path = path;
		this.sectionList = sectionList;
		this.comment = comment;
	}

	update({path, sectionList, comment}) {
		this.path = path ? path : this.path;
		this.sectionList = sectionList ? sectionList : this.sectionList;
		this.comment = comment ? comment : this.comment;
	}
};

let id = 1;

exports.register = {
	pages: [],
	dirPath: `${process.cwd()}/${storage.dir}`,
	get filePath() {
		return `${this.dirPath}/${storage.file}`;
	},
	init() {
		createStore(this.dirPath, this.filePath);

		const list = fs.readFileSync(this.filePath, {encoding: 'utf8'});

		this.pages = list.forEach(page => new Page(page));

		id = this.pages.length;
	},
	create({path, sectionList, comment}) {
		const page = new Page(id ++, path, sectionList, comment);

		const origin = Object.assign({}, this.pages);

		const result = persistent(this.filePath, JSON.stringify(this.pages.push(page)));

		if (!result) {
			this.pages = origin;

			throw new Error('Internal Error');
		}

		return {
			path, sectionList, comment
		};
	},
	findAll() {
		return this.pages;
	},
	findByPK(id) {
		return this.pages.find(page => page.id === id);
	},
	update(id, {path, sectionList, comment}) {
		const page = this.findByPK(id);
		const origin = Object.assign({}, this.pages);

		page.update({path, sectionList, comment});

		const result = persistent(this.filePath, JSON.stringify(this.pages));

		if (!result) {
			this.pages = origin;

			throw new Error('Internal Error');
		}

		return {path, sectionList, comment};
	},
	delete(id) {
		const origin = Object.assign({}, this.pages);

		this.pages.find((page, index) => {
			if (page.id === id) {
				this.pages.splice(index);
			}
		});

		const result = persistent(this.filePath, JSON.stringify(this.pages));

		if (!result) {
			this.pages = origin;

			throw new Error('Internal Error');
		}

		return true;
	}
};

function createStore(dirPath, filePath) {
	const dirIsExisted = fs.existsSync(dirPath);
	const fileIsExisted = fs.existsSync(filePath);

	if (!dirIsExisted) {
		fs.mkdirSync(dirPath);
	}

	if (!fileIsExisted) {
		fs.writeFileSync(filePath, JSON.stringify([]));
	}
}

function persistent(filePath, data) {
	try {
		fs.writeFileSync(filePath, data);
	} catch (e) {
		return false;
	}

	return true;
}