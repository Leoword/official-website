module.exports = async function (ctx) {
	const {sequelize, params} = ctx;

	const {id} = params;
	const Section = sequelize.model('section');

	const {collection} = await Section.findByPK(id);
	const result = [];

	collection.forEach(collectionItem => {
		const {type, args} = collectionItem;

		if (type === 'article') {
			
		}

		if (type === 'file') {
	
		}
	});



};

// {
// 	type: article | File,
// 	args: {
// 		category: 名称，
// 		thumbnail: 缩略图，
// 		exp: {
// 			limit: 限制数量
// 		}
// 		type: 文件的类型，
// 	}
// }