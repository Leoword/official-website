module.exports = {
	mode: 'universal',
	head: {
		title: 'Lemonce',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	loading: { color: '#fff' },
	css: [
		{src: '@fortawesome/fontawesome-free/css/all.min.css'},
		{src: 'animate.css/animate.min.css'},
	],
	plugins: [
		'~/plugins/i18n.js',
		'~/plugins/register.js',
		'~/plugins/connect.js'
	],
	modules: [
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios'
	],
	build: {
		extend(config, ctx) {
			config.module.rules.push({
				test:/\.yaml$/,
				loader: 'json-loader!yaml-loader'
			});
		}
	},
	router: {
		// middleware: will be called for every route change
	},
	// srcDir: default equal with rootDir
	axios: {
		proxy: true,
		prefix: '/api',
		credentials: true
	},
	proxy: {
		'/api/': {
			target: 'http://127.0.0.1:8080',
			changeOrigin: true
		}
	},
	server: {
		port: 8080,
		db: {
			database: 'offical',
			username: 'root',
			password: '123456',
			host: 'localhost',
			dialect: 'mysql',
			freezeTableName: true,
			force: true
		},
		storage: {
			path: 'store/page.json',
			intervalTime: 60000
		}
	}
};
