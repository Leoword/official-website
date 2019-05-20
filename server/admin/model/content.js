const {Base, Interface} = require('@or-change/content');

const base = module.exports = {
	Content: null,
	setBackend(backend) {
		base.Content = new Base(new Interface(backend), {
			defaultLang: 'zh'
		});
	}
};