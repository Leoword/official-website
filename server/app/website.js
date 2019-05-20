const { Nuxt, Builder } = require('nuxt');

function merge(config, pageList) {

	return Object.assign({}, config, {
		router: {
			extendRoutes(routes) {

				pageList.forEach(page => {
					const {name, title, meta, router, body} = page;

					routes.push({
						path: router,
						name: name,
						component: '~/components/index.vue',
						meta: {
							title, meta, body
						}
					}, {
						path: `/:lang${router}`,
						name: `${name}-lang`,
						component: '~/components/index.vue',
						meta: {
							title, meta, body
						}
					});
				});

				routes.push({
					path: '/',
					redirect: '/index'
				});
			}
		}
	});
}

module.exports = class Website {
	constructor(configTemplate, getPage) {
		this.config = configTemplate;
		this._getPage = getPage;
		this.nuxt = null;

		this.pageList = null;
	}

	async reset() {
		const pageList = await this._getPage(this);

		this.pageList = pageList;

		if (!Array.isArray(pageList)) {
			throw new Error('The result should be an array.');
		}

		const config = merge(this.config, pageList);
		const nuxt = new Nuxt(config);
		
		const builder = new Builder(nuxt);
		await builder.build();

		return this.nuxt = nuxt;
	}
};