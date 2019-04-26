const bodyParser = require('koa-bodyparser');
const Koa = require('koa');

const { Nuxt, Builder } = require('nuxt');
const app = new Koa();
let config = require('../nuxt.config.js');

app.use(bodyParser());

config.dev = !(app.env === 'production');

async function start() {
	const nuxt = new Nuxt(config);
	const {
		host = process.env.HOST || '0.0.0.0',
		port = process.env.PORT || 3000
	} = nuxt.options.server;

	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	} else {
		await nuxt.ready();
	}

	app.use(ctx => {
		ctx.status = 200;
		ctx.respond = false;
		ctx.req.ctx = ctx;
		nuxt.render(ctx.req, ctx.res);
	});

	app.listen(port, host);
}

start();
