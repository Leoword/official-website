module.exports = {
	mode: 'universal',
	head: {
		title: 'OrChange',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Orange\'s official website' }
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
		'~/plugins/register.js'
	],
	modules: [
		'bootstrap-vue/nuxt'
	],
	build: {
		extractCSS: true,
		splitChunks: true,
		extend(config) {
			config.module.rules.push({
				test:/\.yaml$/,
				loader: 'json-loader!yaml-loader'
			});
		}
	},
	router: {
		extendRoutes(routes, resolve) {
			routes.push({
				path: '/:lang/index',
				name: 'index',
				component: '~/components/index.vue'
			});
		}
	},
	server: {
		port: 80
	}
};
