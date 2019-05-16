<template>
	<div id="app">
		<component
			:is="format.name"
			v-for="(format, index) in formatList"
			:key="index"
			:options="format.options"
			:render-data="format.data"
			:class="format.classList"
		/>
	</div>
</template>

<script>
import Vue from 'vue';

export default {
	async asyncData(context) {
		const {title, body, meta} = context.route.meta[0];
		const {params, query} = context.route;
		const formatRegistry = Vue.$format;
		const formatList = [];

		for (let format of body) {
			const { name, options = {}, classList } = format;
			const getRenderData = formatRegistry[name].getRenderData;

			formatList.push({
				name, classList, options,
				data: getRenderData && await getRenderData(options, {
					id: params.id
				}, query, context)
			});
		}

		return {
			head: {
				title, meta
			},
			formatList
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

			return;
		}

		this.$i18n.locale = 'zh-CN';
	}
};
</script>

<style lang="less">
body {
	font-family: 'Times New Roman','Microsoft YaHei','SimHei'; 
}
</style>
