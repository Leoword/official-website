<template>
	<div class="format-banner">
		<b-img 
			:src="renderData.URL"
			fluid-grow 
		/>
		<div class="cover"></div>
		<div class="banner-text">
			<h2>{{ renderData.text }}</h2>
			<h1>{{ test }}</h1>
		</div>
	</div>
</template>

<script>

export default {
	name: 'format-banner',
	props: ['options'],
	data() {
		return {
			test: ''
		};
	},
	computed: {
		renderData() {
			const {URL, text} = this.options;

			return {
				URL: URL ? URL : 'https://picsum.photos/600/200/?image=10',
				text: text ? text : this.$t('banner.title')
			};
		}
	},
	async asyncData() {
		
	}
};
</script>

<style lang="less">
.format-banner {
	position: relative;
	height: 300px;
	img {
		height: 100%;
	}
	.banner-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: rgba(0, 0, 0, .8);
		width: 50%;
		text-align: center;
		word-break: break-all;
	}
	.cover {
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, .2);
		position: absolute;
		top: 0;
		left: 0;
	}
}
</style>