<template>
	<div id="app">
		<component
			:is="name.format"
			v-for="(name, index) in pageData.sectionList"
			:key="index"
			:options="name.collection"
			:recommend="recommendData"
			>
			</component>
	</div>
</template>

<script>
import articleData from '../../../components/staticdata/article.json';
import recommendData from '../../../components/staticdata/recommend.json';
export default {
	asyncData({app}) {
		return {
			pageData: {},
			recommendData: []
		};
	},
	fetch({store}) {

	},
	mounted() {
		// 动态获取数据
		// Promise.all([this.$api.article(1, 1), this.$api.recommend])
		// 	.then(res => {
		// 		this.pageData = res[0].data;
		// 		this.recommendData = res[1].data;
		// 	});

		// 静态数据
		this.pageData = articleData;
		this.recommendData = recommendData;

		window.console.log(this.$route);

	}

};
</script>

<style lang="less">

</style>


