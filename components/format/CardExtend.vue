<template>
<div class="py-5 format-card-extend">
	<b-container>
		<b-card-group
			deck
		>
			<b-card
				v-for="(article, index) in renderData.articleList"
				:key="index"
				no-body
				class="rounded-0 position-relative my-4"
				style="min-height:240px;"
			>
				<h4 class="text-center px-2 pt-3">{{ article.title }}</h4>
				<i
					class="fas fa-quote-left pl-3 pb-3"
					style="color:#007BFF;font-size:1.3em;"
				/>
				<b-card-text
					class="px-3 pb-4"
					style="color:#999;"
				>{{ article.abstract | substr }}</b-card-text>
				<b-button
					variant="primary"
					class="position-absolute w-50 rounded-0 ml-4 card-extend-button"
					style="bottom:-20px"
					:to="`${renderData.lang}/article/${article.id}?lang=${article.lang}&title=${article.title}`"
				>{{ $t('cardExtend.link') }}</b-button>
			</b-card>
		</b-card-group>
	</b-container>
</div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-card-extend',
	filters: {
		substr(value) {
			return getSubStr(value, 100, 50);
		}
	},
	props: ['options'],
	async renderData(options, context, getArticle, getArticleList) {
		const { articleIdList, categoryId, limit, keyword } = options;
		let articleList = [];

		if (articleIdList) {
			const promises = articleIdList.map((id) => {
				return getArticle(id, context.params.lang);
			});

			articleList = await Promise.all(promises).then((res) => {
				return res.map((ele) => {
					return ele.data;
				});
			});

		} else {
			articleList = await getArticleList({
				categoryId,
				limit: limit ? limit : 2,
				keyword, 
				lang: context.params.lang
			});
		}

		return {
			lang: context.params.lang ? `/${context.params.lang}` : '',
			articleList
		};
	}
};
</script>

<style lang="less">
.format-card-extend {
	.card-extend-button {
		&:hover {
			width: 100%;
		}
	}
	.card p{
		max-height: 200px;
		overflow: hidden;
		font-size: 14px;
	}
}
</style>