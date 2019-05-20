<template>
	<div class="format-card">
		<b-container class="py-5">
			<b-card-group 
				deck
				class="animated bounceInLeft"
			>
				<b-card 
					v-for="(item, index) in renderData"
					:key="index"
					no-body
				>
					<b-link :to="item.href">
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

const MAX_ITEM_LENGTH = 4;

export default {
	name: 'format-card',
	filters: {
		substr(value) {
			return getSubStr(value, 80, 30);
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
				thumbnail: article.thumbnail,
				abstract: article.abstract
			};
		}));
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

