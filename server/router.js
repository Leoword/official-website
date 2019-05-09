const Router = require('koa-router');
const Sequelize = require('sequelize');

const router = module.exports = new Router({prefix: 'api'});

router.get('/reset', async (ctx) => {
	await ctx.website.reset();
});

router.get('/page', (ctx) => {
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
	commit.thumbnail = retrive.thumbnail;

	ctx.body = commit;
});

router.get('/article', async (ctx) => {
	const  {query, db } = ctx;

	const { categoryId, limit, lang, keyword } = query;

	const options = {
		where: {},
		order: [['createdAt', 'DESC']]
	};
	const langMapping = {};
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
		options.limit = limit;
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
			id: articleId,
			title, abstract, author, createdAt,
			thumbnail: `/api/file/${assets[0]}`
		};

		if (langMapping[lang]) {
			langMapping[lang].push(article);
		} else {
			langMapping[lang] = [
				article
			];
		}
	});

	for (let key of langMapping) {
		result.push(langMapping[key][0]);
	}

	ctx.body = result;
});

router.get('/category/:id/article', async (ctx) => {
	const { params, db, query } = ctx;
	const { limit, lang, keyword } = query;
	const options = {
		where: {},
		order: [['createdAt', 'DESC']]
	};
	const langMapping = {};
	const result = [];

	const articleList = await db.Classification.findAll({
		where: {
			categoryId: params.id
		},
		attributes: ['articleId']
	});

	options.where.articleId = {
		[Sequelize.Op.in]: articleList.map(article => article.id)
	};

	if (lang) {
		options.where.lang = lang;
	}

	if (limit) {
		options.limit = limit;
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
		articleId, title, lang, abstract, assets, text, author, createdAt
	}) => {
		const article = {
			id: articleId,
			title, abstract, text, author, createdAt,
			thumbnail: `/api/file/${assets[0]}`
		};

		if (langMapping[lang]) {
			langMapping[lang].push(article);
		} else {
			langMapping[lang] = [
				article
			];
		}
	});

	for (let key of langMapping) {
		result.push(langMapping[key][0]);
	}

	ctx.body = result;
});

router.get('/file/:hash', async (ctx) => {
	const { db, params } = ctx;

	const file = await db.File.findByPk(params.hash);

	if (!file) {
		ctx.throw(404, 'The file is not existed.');

		return;
	}

	ctx.set('Content-Type', file.type);
	ctx.body = Buffer.from(file.file);
});