import Vue from 'vue';

const context = require.context('~/components/format', false, /\.vue/);
Vue.prototype.$components = {};

context.keys().forEach(key => {
	const component = context(key).default;

	Vue.component(component.name, component);

	Vue.prototype.$components[component.name] = component.asyncData;
});
