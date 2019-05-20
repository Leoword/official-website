const Router = require('koa-router');

module.exports = new Router({
	prefix: '/app/api'
}).get('/reset', async (ctx) => {
	await ctx.website.reset();

	ctx.body = ctx.website.pageList;
}).get('/article/:id', async (ctx) => {
	const { params, appDB, query } = ctx;

	const content = await appDB.Content.get(params.id);


	if (!content) {
		ctx.throw(404, 'The article is not existed.');

		return;
	}

	const commit = await content.get(query.lang);

	ctx.body = commit;
}).get('/article', async (ctx) => {
	const  {query, appDB } = ctx;

	const { categoryId, limit, lang, keyword } = query;

	const contentList = [];
	const result = [];

	if (categoryId) {
		const classificationList = await appDB.Classification.findAll({
			where: {
				categoryId
			},
			attributes: ['articleId']
		});

		for (let classification of classificationList) {
			const content = await appDB.Content.get(classification.articleId);

			if (content) {
				contentList.push(content);
			}
		}
	} else {
		const list = await appDB.Content.query();
		contentList.push(...list);
	}

	for (let content of contentList) {
		const langList = await content.langs({limit, lang, keyword});
		result.push(...langList);
	}
	
	if (limit) {
		ctx.body = result.slice(0, limit);
	} else {
		ctx.body = result;
	}

});