<template>
	<div 
		class="format-category position-relative"
		:style="`background-image:url(${options.image});`"
	>
		<div class="format-category-label position-absolute fixed-bottom">
			<b-container>
				<b-row>
					<b-col
						v-for="(nav, index) in renderData.category"
						:key="index"
						:class="{active:indexActive === nav.categoryId,'category-label-tap': true}"
					>
						<b-link
							class="text-white"
							:to="nav.href"
						>
							<b-card-text class="text-center py-3">{{ nav.label | substr }}</b-card-text>
						</b-link>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-category',
	filters: {
		substr(value) {
			return getSubStr(value, 10, 6);
		}
	},
	props: ['options'],
	data() {
		return {
			indexActive: this.renderData.indexActive || this.renderData.category[0].categoryId
		};
	},
	methods: {
		activeClass (index) {
			this.indexActive = index;
		}
	},
	async renderData({ options, lang, params, mapping }) {
		const category = options[lang || 'zh-CN'].map(option => {
			return {
				href: (lang ? `/${lang}` : '') + `/category/${option.categoryId}`,
				categoryId: option.categoryId,
				label: option.label
			};
		});

		return {
			indexActive: params[mapping['categoryId']],
			category
		};
	}
};
</script>

<style lang="less">
.format-category {
	height: 400px;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: cover;
	.format-category-label {
		background-color: rgba(0, 0, 0, 0.5);
		.category-label-tap {
			transition: all 0.2s;
			a {
				text-decoration: none;
				font-size: 14px;
			}
			&:hover {
				background-color: rgba(0, 0, 0, 0.2);
			}
		}
	}
	.active {
		background-color: #3f82fc !important;
	}
}
@media screen and (max-width:576px) {
	.format-category {
		height: 200px;
	}
}
</style>
