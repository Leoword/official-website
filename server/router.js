const Router = require('koa-router');

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

	const commit = await content.get(query.lang);

	ctx.body = commit;
});

router.get('/article', async (ctx) => {
	const  {query, db } = ctx;

	const { categoryId, limit, lang, keyword } = query;

	const contentList = [];
	const result = [];

	if (categoryId) {
		const classificationList = await db.Classification.findAll({
			where: {
				categoryId
			},
			attributes: ['articleId']
		});

		for (let classification of classificationList) {
			const content = await db.Content.get(classification.articleId);

			if (content) {
				contentList.push(content);
			}
		}
	} else {
		const list = await db.Content.query();
		contentList.push(...list);
	}

	for (let content of contentList) {
		const langList = await content.langs({limit, lang, keyword});
		result.push(...langList);
	}

	ctx.body = result;
});