<template>
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
import homeData from '../../components/staticdata/home.json';
export default {
	asyncData({app}) {
		return {
			recommend: [],
			pageData: {}
		};
	},
	fetch({store}) {
 
	},
	mounted() {
		// 动态获取数据
		// this.$api.page(1)
		// 	.then(res => {
		// 		this.pageData = res.data;
		// 	});

		// 静态数据
		this.pageData = homeData;
	}
};
</script>

<style lang="less">

</style>


