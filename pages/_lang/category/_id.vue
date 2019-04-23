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
import articleListData from '../../../components/staticdata/articleList.json';
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
		// Promise.all([this.$api.category(this.$route.params.id), this.$api.recommend])
		// 	.then(res => {
		// 		this.pageData = res[0].data;
		// 		this.recommendData = res[1].data;
		// 	});

		// 静态数据
		this.pageData = articleListData;
		this.recommendData = recommendData;
	}
};
</script>

<style lang="less">

</style>


