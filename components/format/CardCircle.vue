<template>
	<div class="format-card-circle">
		<b-container class="pt-5 pb-4">
			<b-row>
				<b-col
					v-for="(item, index) in renderData"
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
						:to="item.href"
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
					<b-card-text class="text-center pt-2">{{ item.title | substr }}</b-card-text>
				</b-col>
			</b-row>
		</b-container>	
	</div>
</template>

<script>
import { getSubStr } from './mixin.js';

const MAX_ITEM_LENGTH = 4;

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
				title: article.title
			};
		}));
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

