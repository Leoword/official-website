<template>
<div class="py-5 format-card-extend">
	<b-container>
		<b-card-group
			deck
		>
			<b-card
				v-for="(article, index) in renderData"
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
					:to="article.href"
				>{{ $t('cardExtend.link') }}</b-button>
			</b-card>
		</b-card-group>
	</b-container>
</div>
</template>

<script>
import { getSubStr } from './mixin.js';

const MAX_ITEM_LENGTH = 3;

export default {
	name: 'format-card-extend',
	filters: {
		substr(value) {
			return getSubStr(value, 100, 50);
		}
	},
	props: ['options'],
	async renderData({ options, lang, Article }) {
		const { selector } = options;

		return ({
			category(id) {
				return Article.list({
					categoryId: id,
					limit: MAX_ITEM_LENGTH,
					lang
				});
			},
			enum(list) {
				return Promise.all(list.slice(0, MAX_ITEM_LENGTH - 1).map(articleId => {
					return Article.get(articleId, lang);
				}));
			}
		})[selector.name].call(null, selector.payload).then(list => list.map(article => {
			return {
				href: (lang ? `/${lang}` : '') + `/article/${article.id}/${article.title}`,
				title: article.title,
				abstract: article.abstract
			};
		}));
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