const Router = require('koa-router');
const Sequelize = require('sequelize');

const router = module.exports = new Router({prefix: '/api'});

router.get('/reset', async (ctx) => {
	await ctx.website.reset();

	ctx.body = ctx.website.pageList;
});

router.get('/article/:id', async (ctx) => {
	const { params, db, query } = ctx;

	const content = await db.Content.get(params.id);


	if (!content) {
		ctx.throw(404, 'The article is not existed.');

		return;
	}

	const commit = await content.read(query.lang);

	const retrive = await db.Commit.findByPk(commit.hash);
	commit.thumbnail = retrive.assets[0];

	ctx.body = commit;
});

router.get('/article', async (ctx) => {
	const  {query, db } = ctx;

	const { categoryId, limit, lang, keyword } = query;

	const options = {
		where: {},
		order: [['createdAt', 'DESC']]
	};
	const articleMapping = {};
	const result = [];

	if (categoryId) {
		const articleList = await db.Classification.findAll({
			where: {
				categoryId
			},
			attributes: ['articleId']
		});
	
		options.where.articleId = {
			[Sequelize.Op.in]: articleList.map(article => article.id)
		};
	}

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

	const commits = await db.Commit.findAll(options);

	commits.forEach(({
		articleId, title, lang, abstract, assets, author, createdAt
	}) => {
		const article = {
			id: articleId, lang,
			title, abstract, author, createdAt,
			thumbnail: assets[0]
		};

		if (articleMapping[`${articleId}-${lang}`]) {
			articleMapping[`${articleId}-${lang}`].push(article);
		} else {
			articleMapping[`${articleId}-${lang}`] = [
				article
			];
		}
	});

	for (let key in articleMapping) {
		result.push(articleMapping[key][0]);
	}

	ctx.body = result;
});