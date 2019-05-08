<template>
<div class="py-5 format-card-extend">
	<b-container>
		<b-card-group
			deck
			>
			<b-card
				v-for="(item,index) in options"
				:key="index"
				no-body
				class="rounded-0 position-relative my-4"
				style="min-height:240px;"
				>
				<h4 class="text-center px-2 pt-3">
					{{ item.title }}
				</h4>
				<i
					class="fas fa-quote-left pl-3 pb-3"
					style="color:#007BFF;font-size:1.3em;"
					></i>
				<b-card-text
					class="px-3 pb-4"
					style="color:#999;"
					>
					{{ item.abstract | substr }}
				</b-card-text>
				<b-button
					variant="primary"
					class="position-absolute w-50 rounded-0 ml-4 card-extend-button"
					style="bottom:-20px"
					:href="`/article/${item.hash}`"
					:to="`/article/${item.hash}`"
					>
					{{ $t('cardExtend.link') }}
				</b-button>
			</b-card>
		</b-card-group>
	</b-container>
</div>
</template>

<script>
import {getSubStr} from './mixin.js';

export default {
	name: 'format-card-extend',
	filters: {
		substr(value) {
			return getSubStr(value, 100, 50);
		}
	},
	props: ['options'],
	data () {
		return {
			
		};
	},
	async asyncData(context, options) {

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