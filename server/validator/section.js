const Joi = require('joi');

exports.section = {
	create: {
		body: {
			formatId: Joi.number().required(),
			collection: Joi.object().keys({
				
			}).required(),
			comment: Joi.string().max(200)
		},
		query: {
			formatId: Joi.number()
		}
	},
	update: {
		body: {
			formatId: Joi.number(),
			collection: Joi.object().keys({
				
			}),
			comment: Joi.string().max(200)
		}
	}
};

exports.format = {
	create: {
		body: {
			name: Joi.string().max(15).required(),
			comment: Joi.string().max(200)
		}
	},
	update: {
		body: {
			name: Joi.string().max(15),
			comment: Joi.string().max(200)
		}
	}
};