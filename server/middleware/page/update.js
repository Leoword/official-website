module.exports = function (ctx) {
	const {Page, request, response} = ctx;

	const {path, sectionList, comment} = request.body;
	const pageId = request.params.id;

	let page;

	try {
		page = Page.update(pageId, {path, sectionList, comment});
	} catch (e) {
		ctx.throw(500, 'Internal Error');
	}

	response.body = page;
};