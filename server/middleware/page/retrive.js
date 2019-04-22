module.exports = function (ctx, next) {
	const {Page, request, response} = ctx;

	const pageId = request.params.id;

	const page = Page.findByPk(pageId);

	if (!page) {
		ctx.throw(404, 'The page is not existed.');

		return;
	}

	next();

	response.body = {path: page.path, sectionList: page.sectionList};
};