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
		const {title, body, meta} = context.route.meta;
		const {params, query} = context.route;
		const methodMapping = Vue.$components;

		return {
			head: {
				title, meta
			},
			sectionList: body.map(async section => {
				const {name, options, classList} = section;

				const collection = await methodMapping[name](options, {
					id: params.id
				}, {
					query
				}, context);

				return {
					name, classList, options: collection
				};
			})
		};
	},
	head() {
		return {
			title: this.title,
			meta: this.meta
		};
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
