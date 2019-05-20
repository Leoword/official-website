const Sequelize = require('sequelize');
const markdownIt = require('markdown-it');
const path = require('path');

const sequelize = require(path.resolve('server/sequelize.js'));

const Article = sequelize.define('article', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
		allowNull: false
	}
});

const Commit = sequelize.define('commit', {
	hash: {
		type: Sequelize.STRING(70),
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	lang: {
		type: Sequelize.STRING,
		allowNull: false
	},
	articleId: {
		type: Sequelize.STRING,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	abstract: {
		type: Sequelize.STRING,
		allowNull: false
	},
	assets: {
		type: Sequelize.STRING,
		get() {
			const text = this.getDataValue('text');
			const assets = [];

			if (!text) {
				return assets;
			}

			const nodeList = markdownIt().parse(text);

			nodeList.forEach(node => {
				if (node.children !== null) {
					node.children.forEach(element => {
						if (element.type === 'image') {
							const url = element.attrs[0][1];

							assets.push(url);
						}
					});
				}
			});

			return assets;
		}
	},
	thumbnail: {
		type: Sequelize.STRING
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	base: {
		type: Sequelize.STRING(70)
	},
	author: {
		type: Sequelize.STRING
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
		allowNull: false
	}
});

module.exports = {
	content: {
		async get(id) {
			return await Article.findByPk(id);
		},
		async query() {
			return await Article.findAll();
		},
		lang: {
			async get(id, lang = 'zh') {
				const article = await Commit.findAll({
					where: {
						articleId: id, lang
					},
					order: [['createdAt', 'DESC']]
				});

				if (article[0]) {
					article[0].thumbnail = article[0].assets[0];
				}

				return article[0];
			},
			async query(id, { limit, lang, keyword }) {
				const options = {
					where: {
						articleId: id
					},
					order: [['createdAt', 'DESC']]
				};

				if (lang) {
					options.where.lang = lang;
				}
			
				if (limit) {
					options.limit = Number(limit);
				}
			
				if (keyword) {
					options.where[Sequelize.Op.or] = [
						{
							title: {
								[Sequelize.Op.like]: `%${keyword}%`
							}
						},
						{
							abstract: {
								[Sequelize.Op.like]: `%${keyword}%`
							}
						}
					];
				}

				const commits = await Commit.findAll(options);
				const langs = {};
				const result = [];

				commits.forEach(commit => {
					if (!langs[commit.lang]) {
						commit.thumbnail = commit.assets[0];
						langs[commit.lang] = commit;
					}
				});

				for (let key in langs) {
					result.push(langs[key]);
				}

				return result;
			}
		}
	}
};