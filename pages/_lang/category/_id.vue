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
import pageData from '../../../components/staticdata/articleList.json';
import recommendData from '../../../components/staticdata/recommend.json';
export default {
	asyncData({app}) {
		return {
			recommendData,
			pageData
		};
	},
	fetch({store}) {

	},
	mounted() {
		// 动态获取数据
		// this.$api.page(1)
		// .then(res => {
		// 	res.data.sectionList.forEach(item => {
		// 		const formatName = item.format.slice(7);
		// 		this.components.push(item.format);
		// 		this.data[formatName] = item.format.collection;
		// 	});
		// })
	}
};
</script>

<style lang="less">

</style>


