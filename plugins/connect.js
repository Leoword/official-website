import axios from 'axios';

export default {
	'page': function (pageId) {
		// return axios.get('/api/page/' + pageId);
		return axios.get('https://api.myjson.com/bins/14yib4');
	},
	'recommend': function () {
		// return axios.get('/api/');
		return axios.get('https://api.myjson.com/bins/zrfqo');
	},
	'category': function (categoryId) {
		// return axios.get('/api/category/' + categoryId + '/article');
		return axios.get('https://api.myjson.com/bins/sm8hc');
	},
	'article': function (articleId, languageId) {
		// return axios.get('/api/article/' + articleId + '/language/' + languageId);
		return axios.get('https://api.myjson.com/bins/112l9s');
	}
};