<template>
	<div id="app">
		<component
			:is="section.format"
			v-for="(section, index) in pageData.sectionList"
			:key="index"
			:options="section.collection"
			>
			</component>
	</div>
</template>

<script>
import homeData from '../components/staticdata/articleList.json';
import Vue from 'vue';

export default {
	async asyncData(context) {
		// const result = await context.req.db.Page.read();

		console.log(context.route.params, context.route);
		return {
			pageData: homeData
		};
	}
};
</script>

<style lang="less">
body {
	font-family: 'Times New Roman','Microsoft YaHei','SimHei'; 
}
</style>
