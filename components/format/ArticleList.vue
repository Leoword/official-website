<template>
	<div class="overflow-auto">
		<b-container>
			<b-row>
				<b-col class="pt-3">
					<b-card
						v-for="(article, index) in renderData.articleList"
						id="list"
						:key="index"
						class="border-0"
					>
						<h4 :title="article.title">
							<b-link
								target="_blank"
								:to="article.href"
							>{{ article.title }}</b-link>
						</h4>
						<b-card-text 
							class="list-summary" 
						>
							<small>{{ article.abstract | substr }}</small>
						</b-card-text>
						<b-card-text style="color:#999;">
							<small>{{ $t('article.by') }}&nbsp;{{ article.author }}&nbsp;{{ $t('article.published') }}&nbsp;{{ article.createdAt }}</small>
						</b-card-text>
					</b-card>
				</b-col>
				<!-- 推荐阅读 -->
				<b-col
					v-if="renderData.recommend.length !== 0"
					cols="3"
					class="d-none d-md-block pt-5"
				>
					<b-card
						class="rounded-0"
						body-class="pb-0"
					>
						<h5 class="mb-4">{{ $t('article.recommend') }}</h5>
						<b-card
							v-for="(item, index) in renderData.recommend"
							:key="index"
							no-body
							class="border-0 pb-4"
						>
							<b-link 
								target="_blank"
								:to="item.href"
							>
								<b-img
									:src="item.thumbnail"
									fluid
								/>
							</b-link>
							<b-card-text class="text-center mt-3">
								<small>{{ item.title }}</small>
							</b-card-text>
						</b-card>
					</b-card>
				</b-col>
			</b-row>
			<b-pagination
				v-model="currentPage"
				:total-rows="data.length"
				:per-page="perPage"
				aria-controls="list"
				align="center"
				class="mt-3"
				@click.native="windowMove"
			></b-pagination>
		</b-container>
	</div>
</template>

<script>
import { getSubStr } from './mixin.js';

const MAX_ITEM_LENGTH =4;

export default {
	name: 'format-article-list',
	filters: {
		substr(value) {
			return getSubStr(value, 150, 60);
		}
	},
	props: [
		'options'
	],
	data() {
		return {
			heading: '',
			perPage: 8,
			currentPage: 1,
			data: this.renderData.articleList
		};
	},
	computed: {
		articleList () {
			return this.data.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		},
	},
	methods: {
		windowMove () {
			let position = document.documentElement.scrollTop;
			const scroll = setInterval(function () {
				if (position < document.documentElement.scrollTop) {
					clearInterval(scroll);
				}

				window.scrollBy(0, -25);
				position = document.documentElement.scrollTop;

				if (position === 0) {
					clearInterval(scroll);
				}
			},10);
		}
	},
	async renderData({ options, params, lang, Article, mapping }) {
		const { categoryId } = options.articleList;
		let recommend = [];

		const articleList = await Article.list({
			categoryId: params[mapping['categoryId']] ? params[mapping['categoryId']] : categoryId,
			lang
		}).then(list => list.map(article => {
			return {
				href: (lang ? `/${lang}` : '') + `/article/${article.id}/${article.title}`,
				title: article.title,
				abstract: article.abstract,
				author: article.author
			};
		}));

		if (options.recommend) {
			const { selector } = options.recommend;

			recommend = await ({
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
					title: article.title
				};
			}));
		}

		return {
			articleList,
			recommend
		};
	}
};
</script>

<style lang="less">
p.list-summary {
	max-height:65px;
}
</style>