<template>
	<div id="app">
		<component
			:is="format.name"
			v-for="(format, index) in formatList"
			:key="index"
			:options="format.options"
			:render-data="format.data"
			:class="format.classList"
		/>
	</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import config from '../config.json';

const prefix = `${config.websiteURL}/app/api`;

const Article = {
	async get(articleId, lang) {
		return axios.get(`${prefix}/article/${articleId}`, {
			params: {
				lang: lang
			}
		}).then(res => res.data);
	},
	async list({ categoryId, keyword, limit, lang }) {
		return await axios.get(`${prefix}/article`, {
			params: {
				categoryId, keyword, limit, lang
			}
		}).then(res => res.data);
	}
};

export default {
	async asyncData(context) {
		const {title, body, meta} = context.route.meta[0];
		const params = context.params;
		let lang;

		const formatRegistry = Vue.$format;
		const languageRegistry = Vue.$language;

		const formatList = [];

		if (languageRegistry[params.lang]) {
			lang = params.lang;
		}

		for (let format of body) {
			const { name, options = {}, classList, mapping } = format;
			const renderData = formatRegistry[name].renderData;

			formatList.push({
				name, classList, options,
				data: renderData && await renderData({
					options, mapping,
					lang, params, Article,
					context
				})
			});
		}

		return {
			head: {
				title, meta
			},
			formatList
		};
	},
	head() {
		const head = {};

		if (this.head.title) {
			head.title = this.head.title;
		}

		if (this.head.meta) {
			head.meta = this.head.meta;
		}

		return head;
	},
	mounted() {
		const lang = this.$route.params.lang;

		if (Vue.$language[lang]) {
			this.$i18n.locale = lang;

			return;
		}

		this.$i18n.locale = 'zh-CN';
	}
};
</script>

<style lang="less">
body {
	font-family: 'Times New Roman','Microsoft YaHei','SimHei'; 
}
</style>
