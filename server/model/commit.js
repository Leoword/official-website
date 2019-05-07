const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize.define('commit', {
	hash: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4
	},
	lang: {
		type: Sequelize.STRING,
		allowNull: false
	},
	articleId: {
		type: Sequelize.UUID,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	abstract: {
		type: Sequelize.STRING,
		allowNull: false
	},
	assets: {
		type: Sequelize.STRING
	}, 
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	base: {
		type: Sequelize.UUID
	},
	author: {
		type: Sequelize.STRING
	},
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
		allowNull: false
	}
});