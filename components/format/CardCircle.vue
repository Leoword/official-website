<template>
	<div class="format-card-circle">
		<b-container class="pt-5 pb-4">
			<b-row>
				<b-col
					v-for="(item, index) in renderData.articleList"
					:key="index"
					ref="cardList"
					class="text-center circle-card"
					cols="6"
					lg="3"
				>
					<b-link
						class="rounded-circle"
						:style="{
							width: `${radius}px`,
							height: `${radius}px`
						}"
						:to="`${renderData.lang}/article/${item.id}?lang=${item.lang}&title=${item.title}`"
					>
						<b-img 
							class="rounded-circle"
							:src="item.thumbnail"
							:style="{
								width: `${radius}px`,
								height: `${radius}px`
							}"
							fluid 
						/>
					</b-link>
					<b-card-text class="text-center pt-2">{{ item.abstract | substr }}</b-card-text>
				</b-col>
			</b-row>
		</b-container>	
	</div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-card-circle',
	filters: {
		substr(value) {
			return getSubStr(value, 25, 10);
		}
	},
	props: ['options'],
	data () {
		return {
			radius: 0
		};
	},
	mounted() {
		this.setRadius();
		window.addEventListener('resize', this.setRadius);
	},
	destroyed() {
		window.removeEventListener('resize', this.setRadius);
	},
	methods: {
		setRadius() {
			if (this.$refs.cardList) {
				const {
					offsetWidth: width
				} = this.$refs.cardList[0];

				this.radius = width - 60;
			}
		}
	},
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
.format-card-circle {
	.circle-card {
		a {
			transition: all 0.2s;
			box-sizing: content-box;
			display: inline-block;
			overflow: hidden;
			border: 7px solid rgba(0, 123, 255, .3);
			&:hover {
				border: 7px solid rgba(0,123, 255, .8);
			}
		}
	}
	
	img {
		transition: all 0.2s;
		&:hover {
			transform: scale(1.1);
		}
	}
	
	.card-text {
		max-height: 75px;
		overflow-y: hidden;
		font-size: 14px;
	}
}
@media screen and (max-width:576px){
	.format-card-circle {
		.circle-card {
			min-height: 150px;
		}
	}
}
</style>

