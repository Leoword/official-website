const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const koaSession = require('koa-session');
const path = require('path');

const config = require(path.resolve('config.json'));
const nuxtConfig = require('../nuxt.config.js');

const appInit = require('./app');
const adminInit = require('./admin');

const app = new Koa();

app.keys = [Math.random().toString(16).substr(2, 8)];
	
app
	.use(koaBody({
		multipart: true,
		formidable: {
			maxFileSize: 200*1024*1024
		}
	}))
	.use(koaSession({
		key: 'website:session',
		maxAge: 43200000
	}, app))
	.use(serve(path.resolve(__dirname, config.static.path), {
		maxAge: 3600000,
		gzip: true
	}));

const {
	host = process.env.HOST || '0.0.0.0',
	port = process.env.PORT || 3000
} = nuxtConfig.server;

adminInit(app);
appInit(app).then(() => app.listen(port, host));
