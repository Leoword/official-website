module.exports = async function (ctx) {
	const {Page, request, response} = ctx;

	const {path, sectionList, comment} = request.body;

	let page;

	try {
		page = Page.create({path, sectionList, comment});
	} catch (e) {
		ctx.throw(500, 'Internal Error');
	}

	response.body = page;
};