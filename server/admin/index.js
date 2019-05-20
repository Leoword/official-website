const path = require('path');
const db = require('./model');

const Page = require('./model/page');
const User = require('./model/user');
const Content = require('./model/content');
const userBackend = require(path.resolve('backend/admin/user.js'));
const contentBackend = require(path.resolve('backend/admin/content.js'));
const pagebackend = require(path.resolve('backend/admin/fs.js'));

User.setBankend(userBackend);
Content.setBackend(contentBackend);
Page.setBackend(pagebackend);

const router = require('./router');

userBackend.initCache();

module.exports = function (app) {
	app.context.db = db;
	
	app.use(router.routes());
};

