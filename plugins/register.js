import Vue from 'vue';

const context = require.context('~/components/format', false, /\.vue/);
global.$components = {};

context.keys().forEach(key => {
	const component = context(key).default;

	Vue.component(component.name, component);

	global.$components[component.name] = component.asyncData;
});
