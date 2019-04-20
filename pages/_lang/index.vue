<template>
	<!-- <div id="app">
		<component 
			v-for="(name, index) in components" 
			:key="index" 
			:is="name"
			:options="data"></component>
	</div> -->
	<div id="app">
		<component 
			:is="name.format"
			v-for="(name, index) in pageData.sectionList" 
			:key="index" 
			:options="name.collection"
			:recommend="recommend"
			>
			</component>
	</div>
</template>

<script>
import pageData from '../../components/staticdata/home.json';
// import pageData from '../../components/staticdata/articleList.json';
// import pageData from '../../components/staticdata/article.json';
// import recommendData from '../../components/staticdata/recommend.json';
// import pageData from '../../components/staticdata/test.json';
export default {
	asyncData({app}) {
		return {
			recommend: [],
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

		this.dataProcess();
		
	},
	methods: {
		dataProcess() {
			if (typeof recommendData !== 'undefined') {
				this.recommend = recommendData;
			}		
		}
	}
};
</script>

<style lang="less">

</style>


