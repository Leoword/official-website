<template>
	<div class="format-banner">
		<b-img 
			:src="options.image"
			fluid-grow 
		/>
		<div class="cover"></div>
		<div class="banner-text">
			<h2>{{ options.text }}</h2>
		</div>
	</div>
</template>

<script>

export default {
	name: 'format-banner',
	props: ['options'],
	data() {
		return {
		};
	},
	async getRenderData(options) {
		return {
			image: options.image,
			text: options.text
		};
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