exports.Section = require('./section');
exports.Format = require('./format');
exports.Article = require('./article');
exports.File = require('./file');

const Page = exports.Page = require('./page');
Page.init();

const sequelize = require('../lib/sequelize');
sequelize.sync();