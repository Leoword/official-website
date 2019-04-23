import axios from 'axios';
import Vue from 'vue';

const api = {
	'page': function (pageId) {
		return axios.get('/api/page/' + pageId);
	},
	'recommend': function () {
		return axios.get('/api/');
	},
	'category': function (categoryId) {
		return axios.get('/api/category/' + categoryId + '/article');
	},
	'article': function (articleId, languageId) {
		return axios.get('/api/article/' + articleId + '/language/' + languageId);
	}
};

Vue.prototype.$api = api;