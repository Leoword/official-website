const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');

const Page = require('./model/page');
const Context = require('./model/content');

Page.setBackend(require('../backend/fs'));
Context.setBackend(require('../backend/content'));

const db = require('./model');
const Website = require('./website');
const config = require('../nuxt.config.js');

const app = new Koa();
app.context.db = db;

config.dev = !(app.env === 'production');

const website = app.context.website = new Website(config, async function () {
	return await db.Page.read();
});

app
	.use(bodyParser())
	.use(router.routes())
	.use(ctx => {
		ctx.status = 200;
		ctx.respond = false;
		
		ctx.website.nuxt.render(ctx.req, ctx.res);
	});

const {
	host = process.env.HOST || '0.0.0.0',
	port = process.env.PORT || 3000
} = config.server;

website.reset().then(() => app.listen(port, host));
