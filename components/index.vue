<template>
	<div id="app">
		<component
			:is="section.name"
			v-for="(section, index) in sectionList"
			:key="index"
			:options="section.options"
			:class="section.classList"
			>
			</component>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	async asyncData(context) {
		const {title, body, meta} = context.route.meta[0];
		const {params, query} = context.route;
		const methodMapping = Vue.$components;
		const sectionList = [];

		for (let section of body) {
			const {name, options, classList} = section;
			const collection = await methodMapping[name](options ? options : {}, {
				id: params.id
			}, {
				query
			}, context);
			
			sectionList.push({
				name, classList, options: collection
			});
		}

		return {
			head: {
				title, meta
			},
			sectionList
		};
	},
	head() {
		const head = {};

		if (this.head.title) {
			head.title = this.head.title;
		}

		if (this.head.meta) {
			head.meta = this.head.meta;
		}

		return head;
	},
	mounted() {
		const lang = this.$route.params.lang;

		if (this.$language[lang]) {
			this.$i18n.locale = lang;
		}
	}
};
</script>

<style lang="less">
body {
	font-family: 'Times New Roman','Microsoft YaHei','SimHei'; 
}
</style>
