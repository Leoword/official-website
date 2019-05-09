<template>
	<div class="overflow-auto">
		<b-container>
			<b-row>
				<b-col class="pt-3">
					<b-card
						v-for="(article,index) in options.articleList"
						id="list"
						:key="index"
						class="border-0"
						>
						<h4 :title="article.title">
							<b-link
								to="/article"
								>
								{{ article.id }}{{ article.title }}
							</b-link>
						</h4>
						<b-card-text 
							class="list-summary" 
							>
							<small>{{ article.abstract | substr }}</small>
						</b-card-text>
						<b-card-text style="color:#999;">
							<small> {{ $t('article.by') }} {{ article.author }} {{ $t('article.published') }} {{ article.createdAt }}</small>
						</b-card-text>
					</b-card>
				</b-col>
				<!-- 推荐阅读 -->
				<b-col
					cols="3"
					class="d-none d-md-block pt-5"
					>
					<b-card
						class="rounded-0"
						body-class="pb-0"
						>
						<h5 class="mb-4">
							{{ $t('article.recommend') }}
						</h5>
						<b-card
							v-for="(item,index) in options.recommend"
							:key="index"
							no-body
							class="border-0 pb-4"
							>
							<b-link 
								target="_blank"
								:to="item.url"
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
import {getSubStr} from './mixin.js';
import axios from '~/plugins/axios.js';

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
			data: this.options
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
	async asyncData(options, {
		id
	}, {
		keyword
	}) {
		let articleList = [];
		let recommend = [];

		articleList = await axios.getArticleList();

		if (id) {
			articleList = await axios.getArticleList({
				categoryId: id
			});
		}

		if (keyword) {
			articleList = await axios.getArticleList({
				keyword
			});
		}

		if (options.articleList) {
			const { categoryId, limit, keyword, lang } = options.articleList;

			articleList = await axios.getArticleList({
				categoryId: id ? id : categoryId,
				limit, keyword, lang
			});
		}

		if (options.recommend) {
			const { categoryId, limit, keyword, lang } = options.recommend;

			recommend = await axios.getArticleList({categoryId, limit, keyword, lang});
		}

		return {
			articleList: articleList.map(article =>  {
				return {
					id: article.id,
					title: article.title,
					abstract: article.abstract,
					author: article.author,
					createdAt: article.createdAt
				};
			}),
			recommend: recommend.map(article => {
				return {
					id: article.id,
					thumbnail: article.thumbnail,
					title: article.title
				};
			})
		};
	}
};
</script>

<style lang="less">
p.list-summary {
	max-height:65px;
}
</style>