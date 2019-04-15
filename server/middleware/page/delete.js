module.exports = function (ctx) {
	const {Page, request} = ctx;

	const pageId = request.params.id;

	try {
		Page.delete(pageId);
	} catch (e) {
		ctx.throw(500, e.message);
	}

	ctx.status = 200;
};