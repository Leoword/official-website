<template>
	<div id="app">
		<page-header></page-header>
		<component
			:is="section.format"
			v-for="(section, index) in pageData.sectionList"
			:key="index"
			:options="section.collection"
			>
			</component>
		<page-footer></page-footer>
	</div>
</template>

<script>
import PageHeader from '~/components/Header.vue';
import PageFooter from '~/components/Footer.vue';

import homeData from '../../components/staticdata/home.json';
import Vue from 'vue';

// 引用model

export default {
	components: {
		PageHeader,
		PageFooter
	},
	async asyncData() {
		// const text = await Vue.prototype.$components['format-banner']();

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
