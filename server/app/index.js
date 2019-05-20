const path = require('path');
const router = require('./router');

const Page = require('./model/page');
const Context = require('./model/content');

Page.setBackend(require(path.resolve('backend/app/fs.js')));
Context.setBackend(require(path.resolve('backend/app/content.js')));

const db = require('./model');
const Website = require('./website');
const config = require(path.resolve('nuxt.config.js'));

module.exports = async function (app) {
	app.context.appDB = db;
	
	config.dev = !(app.env === 'production');
	
	const website = app.context.website = new Website(config, async function () {
		return await db.Page.read();
	});
	
	app
		.use(router.routes())
		.use(ctx => {
			ctx.status = 200;
			ctx.respond = false;
			
			ctx.website.nuxt.render(ctx.req, ctx.res);
		});

	await website.reset();
};
