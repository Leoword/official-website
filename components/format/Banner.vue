<template>
	<div :style="{
		width: options.width ? options.width : '100%',
		height: options.height ? options.height : '200px',
		position: 'relative'}
	">
		<img :src="options.image" style="width: 100%;height: 100%">
		<div class="banner-cover">
			<h3></h3>
			<p></p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'format-banner',
	props: ['options']
}
</script>

<style lang="less">
.banner-cover {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	color: #000;
}
</style>

