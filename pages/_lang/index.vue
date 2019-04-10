<template>
	<div id="app">
		<component v-for="(name, index) in $components" :key="index" :is="name"
			:options="{image: 'https://picsum.photos/600/300/?image=25'}"></component>
	</div>
</template>

<script>
export default {
	fetch({store}) {

	},
	asyncData({app}) {

	},
	mounted() {
	}
}
</script>

<style lang="less">

</style>

