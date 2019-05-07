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
					<b-link :to="`/article/${item.hash}`">
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
import {getSubStr} from './mixin.js';

export default {
	name: 'format-card',
	props: ['options'],
	filters: {
		substr(value) {
			return getSubStr(value, 80, 30);
		}
	},
	computed: {
		renderData() {
			return this.options.map(({hash, thumbnail, abstract}) => {
				return {
					hash: hash ? hash : '#',
					thumbnail: thumbnail ? thumbnail : '',
					abstract: abstract ? abstract : this.$t('card.abstract')
				};
			}).slice(0, 4);
		}
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

