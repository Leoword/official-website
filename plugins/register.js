import Vue from 'vue';

const context = require.context('~/components/format', false, /\.vue/);

Vue.mixin({ props: ['renderData'] });
Vue.$format = context.keys().reduce((registry, key) => {
	const format = context(key).default;

	Vue.component(format.name, format);
	registry[format.name] = format;

	return registry;
}, {});