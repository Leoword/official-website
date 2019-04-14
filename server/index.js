global.validate = require('koa2-validation');
global.Joi = require('joi');
global.Router = require('koa-router');

const bodyParser = require('koa-bodyparser');
const router = require('./router');
const Koa = require('koa');

require('./model');
const { Nuxt, Builder } = require('nuxt');

const app = new Koa();

app.context.sequelize = require('./lib/sequelize');

app.use(bodyParser());
app.use(router.routes());

let config = require('../nuxt.config.js');
config.dev = !(app.env === 'production');

async function start() {
	const nuxt = new Nuxt(config);

	const {
		host = process.env.HOST || '127.0.0.1',
		port = process.env.PORT || 3000
	} = nuxt.options.server;

	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	} else {
		await nuxt.ready();
	}

	//改这里
	app.use(ctx => {
		ctx.status = 200;
		ctx.respond = false; // Bypass Koa's built-in response handling
		ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
		nuxt.render(ctx.req, ctx.res);
	});

	app.listen(port, host);
}

start();
