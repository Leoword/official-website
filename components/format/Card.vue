<template>
	<div class="format-card">
		<b-container class="py-5">
			<b-card-group 
				deck
				class="animated bounceInLeft"
			>
				<b-card 
					v-for="(item, index) in renderData.articleList"
					:key="index"
					no-body
				>
					<b-link :to="`${renderData.lang}/article/${item.id}?lang=${item.lang}&title=${item.title}`">
						<b-img
							:src="item.thumbnail" 
							fluid
						/>
					</b-link>
					<b-card-text class="px-3 py-2">{{ item.abstract | substr }}</b-card-text>
				</b-card>
			</b-card-group>
		</b-container>
	</div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-card',
	filters: {
		substr(value) {
			return getSubStr(value, 80, 30);
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
.format-card {
	.card {
		transition: all 0.3s;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
		}
	}
	
	img {
		height: 180px;
	}

	.card-text {
		max-height: 126px;
		overflow-y: hidden;
		font-size: 14px;
	}
}
</style>

