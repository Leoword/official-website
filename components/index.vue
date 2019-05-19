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
import { Promise } from 'q';
const prefix = `${config.websiteURL}/api`;

export default {
	async asyncData(context) {
		const {title, body, meta} = context.route.meta[0];
		const formatRegistry = Vue.$format;
		const formatList = [];

		// 由 articleId 获取指定文章
		async function getArticle(articleId, lang) {
			return await axios.get(`${prefix}/article/${articleId}`, {
				params: {
					lang: lang
				}
			});
		}

		// 由 categoryId 获取一类文章
		async function getArticleList({ categoryId, keyword, limit, lang }) {
			const res = await axios.get(`${prefix}/article`, {
				params: {
					categoryId, keyword, limit, lang
				}
			});

			return res.data;
		}

		for (let format of body) {
			const { name, options = {}, classList } = format;
			const renderData = formatRegistry[name].renderData;

			formatList.push({
				name, classList, options,
				data: renderData && await renderData(options, context, getArticle, getArticleList)
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

		if (this.$language[lang]) {
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
