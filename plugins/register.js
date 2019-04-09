import Vue from 'vue';

Vue.use({
	install(Vue) {
		const context = require.context('~/components/format', false, /\.vue/);
		Vue.prototype.$components = [];

		context.keys().forEach(key => {
			const component = context(key).default;

			Vue.component(component.name, component);

			Vue.prototype.$components.push(component.name);
		});
	}
})