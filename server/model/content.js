const Article = require('./article');
const Commit = require('./commit');
const {Base, Interface} = require('../../../content');

const interfaceInstance = new Interface({
	content: {
		async read(id) {
			const article = await Article.findByPk(id);

			return article;
		}
	},
	i18n: { 
		async langs(id) {
			const commits = await Commit.findAll({
				where: {
					articleId: id
				},
				attributes: ['lang']
			});
			const langs = [];

			commits.forEach(commit => {
				if (commit.lang && langs.indexOf(commit.lang) === -1) {
					langs.push(commit.lang);
				}
			});

			return langs;
		}
	},
	commit: {
		async read(id, lang) {
			const commits = await Commit.findAll({
				where: {
					articleId: id, lang
				},
				order: [['createdAt', 'DESC']]
			});

			return commits[0];
		},
		async query(id, lang) {
			const commits = await Commit.findAll({
				where: {
					articleId: id, lang
				},
				order: [['createdAt', 'DESC']]
			});

			return commits;
		}
	}
});

module.exports = new Base(interfaceInstance, {
	defaultLang: 'zh'
});