const Joi = require('joi');

module.exports = {
	create: {
		body: {
			path: Joi.string().required(),
			sectionList: Joi.array(),
			comment: Joi.string()
		}
	},
	update: {
		body: {
			path: Joi.string(),
			sectionList: Joi.array(),
			comment: Joi.string()
		}
	}
};