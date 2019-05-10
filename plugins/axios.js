import axios from 'axios';

import config from '../config.json';

const prefix = `${config.websiteURL}/api`;

export default {
	async getArticle(id, lang) {
		const res = await axios.get(`${prefix}/article/${id}`, {
			params: {
				lang: lang
			}
		});

		return res.data;
	},
	async getArticleList({ categoryId, keyword, limit, lang }) {
		const res = await axios.get(`${prefix}/article`, {
			params: {
				categoryId, keyword, limit, lang
			}
		});

		return res.data;
	}
};