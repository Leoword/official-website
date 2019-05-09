import axios from 'axios';

const prefix = '/api';

export default {
	getArticle(id, lang) {
		return axios.get(`${prefix}/article/${id}`, {
			query: {
				lang: lang
			}
		});
	},
	getArticleList({ categoryId, keyword, limit, lang }) {
		return axios.get(`${prefix}/article`, {
			query: {
				categoryId, keyword, limit, lang
			}
		});
	}
};