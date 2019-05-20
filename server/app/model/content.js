let backend = null;

exports.Content = class Content {
	constructor(id) {
		this.id = id;
	}

	async get(lang) {
		const content = await backend.content.lang.get(this.id, lang);

		if(!content) {
			return null;
		}

		return {
			id: this.id,
			hash: content.hash,
			lang: content.lang,
			title: content.title,
			abstract: content.abstract,
			text: content.text,
			thumbnail: content.thumbnail,
			author: content.author,
			createdAt: content.createdAt
		};
	}

	async langs(params) {
		const contentList = await backend.content.lang.query(this.id, params);

		if (!Array.isArray(contentList)) {
			throw new Error('The interface query of lang MUST return an array.');
		}

		return contentList.map(({
			hash, lang, title, abstract, thumbnail, author, createdAt
		}) => {
			return {
				id: this.id,	hash, lang, title, abstract, thumbnail, author, createdAt
			};
		});
	}

	static async get(id) {
		const content = await backend.content.get(id);

		if (!content) {
			return null;
		}

		return new this(id);
	}

	static async query(params) {
		const contentList = await backend.content.query(params);

		if (!Array.isArray(contentList)) {
			throw new Error('The interface query of content MUST return an array.');
		}

		return contentList.map(content => new this(content.id));
	}
};

exports.setBackend = function (newBackend) {
	backend = newBackend;
};