<template>
	<div class="format-card-transparent py-5">
    <b-container>
			<b-card 
				class="card-transparent-content"
				no-body
			>
				<h1>{{ renderData[0].title }}</h1>
				<b-card-text style="padding-bottom:4rem;">{{ renderData[0].abstract | substr }}</b-card-text>
				<b-button
					class="card-transparent-button"
					variant="primary"
					size="lg"
					:to="`/article/${renderData[0].id}?lang=${renderData[0].lang}`"
				>{{ $t('content.more') }}</b-button>
			</b-card>
    </b-container>
  </div>
</template>

<script>
import { getSubStr } from './mixin.js';

export default {
	name: 'format-card-transparent',
	filters: {
		substr(value) {
			return getSubStr(value, 220, 75);
		}
	},
	props: ['options'],
	async renderData(options, context, getArticle) {
		return await getArticle(options[0].articleId, context.params.lang);
	}
}; 
</script>

<style lang='less'>
.format-card-transparent {
	min-height: 400px;
	background: url('../../assets/images/bg2.jpg') center center;

	.card-transparent-content {
		position: relative;
		padding: 2rem 4rem 0rem 4rem;
		min-height:300px;
		color: #ffffff;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.card-transparent-button {
		position: absolute;
		left: 4rem;
		bottom: 2rem;
		padding: 0.5rem 2.5rem;
	}
}
@media screen and (max-width:576px) {
	.format-card-transparent {
		.card-transparent-content {
			padding: 2rem 2rem 0rem 2rem;

			h1 {
				text-align: center;
			}
		}

		.card-transparent-button {
			bottom: 1rem;
			left: 50%;
			transform: translateX(-51%);
			display: block;
			width: 80%;
		}
	}
}
</style>
