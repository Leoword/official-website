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
import connectFunction from '~/plugins/connect.js';
export default {
	asyncData() {
		return connectFunction.page()
			.then((res) => {
				return {pageData: res.data};
			});
	}
	// async asyncData() {
	// 	let {data} = await api.page();
	// 	return {pageData: data};
	// }
};
</script>