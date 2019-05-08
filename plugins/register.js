import Vue from 'vue';

const context = require.context('~/components/format', false, /\.vue/);
Vue.$components = {};

context.keys().forEach(key => {
	const component = context(key).default;

	Vue.component(component.name, component);

	Vue.$components[component.name] = component.asyncData;
});
