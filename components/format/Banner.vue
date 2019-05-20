<template>
	<div 
		class="format-banner"
		:style="`background-image:url(${renderData.image});`"
	>
		<!-- <b-img 
			:src="renderData.image"
			fluid-grow 
		/> -->
		<div class="cover"></div>
		<div class="banner-text">
			<h2>{{ renderData.text }}</h2>
		</div>
	</div>
</template>

<script>

export default {
	name: 'format-banner',
	props: ['options'],
	async renderData({options, lang}) {
		return options[lang || 'zh-CN'];
	}
};
</script>

<style lang="less">
.format-banner {
	position: relative;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
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
@media screen and (max-width:576px) {
	.format-banner {
		height: 200px;
	}
}
</style>