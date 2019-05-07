import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';

Vue.use(VueI18n);

const context = require.context('~/locales', false, /\.yaml/);
const list = {};

context.keys().forEach(key => {
	const name = /(.*\/)*([^.]+)/.exec(key.split('/')[1])[0];

	list[name] = require(`~/locales/${name}.yaml`);
});

export default ({ app }) => {
	app.i18n = new VueI18n({
		locale: Cookies.get('lang') ? Cookies.get('lang') : 'zh-CN',
		messages: list
	});

	Vue.prototype.$language = list;

	app.i18n.path = (link) => {
		return `/${app.i18n.locale}/${link}`;
	};
};