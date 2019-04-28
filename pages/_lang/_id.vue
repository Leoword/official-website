<template>
	<div id="app">
		<page-header></page-header>
		<component
			:is="section.format"
			v-for="(section, index) in sectionList"
			:key="index"
			:options="section.collection"
			>
			</component>
		<page-footer></page-footer>
	</div>
</template>

<script>
import PageHeader from '~/components/Header.vue';
import PageFooter from '~/components/Footer.vue';
import axios from '~/plugins/axios';
import getInfo from '~/plugins/connect.js';
import Vue from 'vue';

export default {
	components: {
		PageHeader,
		PageFooter
	},
	asyncData({route}, callback) {
		return axios.get('/page').then(({data}) => {
			const {fullPath} = route;
			let hasPage = false;
			let sectionList = [];
			
			data.forEach(page => {
				if (page.path === fullPath) {
					hasPage = true;
					sectionList = page.sectionList;
				}
			});

			Promise.all(sectionList.map(sectionId => getInfo.getSectionInfo(sectionId)))
				.then(arr => {
					callback(null, {
						sectionList: arr.map(({data}) => data).filter(section => {
							return Vue.prototype.$components.indexOf(section.format) !== -1; 
						})
					});
				}).catch((e) => {
					callback({ statusCode: 404, message: '数据请求失败' });
				});


			if (!hasPage) {
				callback({ statusCode: 404, message: '页面未找到' });
			}
		});
	}
};
</script>