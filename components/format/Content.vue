<template>
	<div class="format-content my-3">
    <b-container>
			<b-row>
				<b-col
				cols="4"
				class="d-none d-md-block"
				>
					<img
						:src="options.thumbnail"
						fluid
						style="width: 100%;max-height: 300px"
						/>
				</b-col>
				<b-col>
					<p
						class="border-0"
						style="color:#999;"
						>
						{{ options.abstract | substr }}
					</p>
					<b-button
						variant="outline-info"
						block
						:to="`/article/${options.id}`"
						class="position-absolute fixed-bottom"
						>
						{{ $t('content.more') }}
					</b-button>
				</b-col>
			</b-row>
    </b-container>
  </div>
</template>

<script>
import {getSubStr} from './mixin.js';
import axios from '~/plugins/axios.js';

export default {
	name: 'format-content',
	filters: {
		substr(value) {
			return getSubStr(value, 370, 140);
		}
	},
	props: ['options'],
	data() {
		return {
		};
	},
	async asyncData(options) {
		const { articleId, categoryId, limit, keyword, lang } = options;

		if (articleId) {
			const article = await axios.getArticle(articleId, options.lang);

			return {
				id: article,
				thumbnail: article.thumbnail,
				abstract: article.abstract
			};
		}

		const articleList = await axios.getArticleList({
			categoryId,
			limit: limit ? limit : 1,
			keyword, lang
		});

		return {
			id: articleList[0].id,
			thumbnail: articleList[0].thumbnail,
			abstract: articleList[0].abstract
		};
	}
};
</script>

<style lang="less">
.format-content {
	max-height: 350px;
	p {
		overflow: hidden;
		max-height: 200px;
		text-indent: 2em;
		font-size: 15px;
	}
}
</style>

