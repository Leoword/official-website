module.exports = async function (ctx, next) {
	const {sequelize, request} = ctx;

	const {sectionList} = request.body;
	const Section = sequelize.model('section');

	const filteredList = await sectionList.filter(async sectionId => {
		const section = await Section.findByPK(sectionId);

		return section;
	});

	request.body.sectionList = filteredList;
	
	next();
};