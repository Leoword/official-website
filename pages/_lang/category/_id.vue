<template>
	<div id="app">
		<component 
			:is="section.format"
			v-for="(section, index) in pageData.sectionList" 
			:key="index" 
			:options="section.collection"
			:recommend="recommendData"
			>
			</component>
	</div>
</template>

<script>
import connectFunction from '~/plugins/connect.js';
export default {
	asyncData() {
		return Promise.all([
			connectFunction.category(),
			connectFunction.recommend()
		]).then((res) => {
			return {
				pageData: res[0].data,
				recommendData: res[1].data
			};
		});
	}
};
</script>