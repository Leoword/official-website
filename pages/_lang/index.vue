<template>
	<div id="app">
		<!-- <component 
			v-for="(name, index) in $components" 
			:key="index" 
			:is="name"
			:options="data"></component> -->
		<component 
			v-for="(name, index) in components" 
			:key="index" 
			:is="name"
			:options="data"></component>

	</div>
</template>

<script>
import cardData from '../../components/staticdata/card.json'
import cardCircleData from '../../components/staticdata/card2.json'
import carouselData from '../../components/staticdata/carousel.json'
import guessData from '../../components/staticdata/guess.json'
import contentDetailedData from '../../components/staticdata/contentDetailed.json'
import indexData from '../../components/staticdata/index.json'
import { Promise } from 'q';
export default {
	fetch({store}) {

	},
	asyncData({app}) {
		// return {
		// 	'components': [],
		// 	'data': {}
		// }
		return {
			data: {
				card: cardData,
				cardCircle: cardCircleData,
				cardExtend: cardCircleData,
				carousel: carouselData,
				guess: guessData,
				contentDetailed: contentDetailedData,
				index: indexData
			},
			components: [
				'format-carousel',
				'format-card',
				'format-content',
			]
		}
	},
	mounted() {
		// 数据复杂版
		this.$api.page(1)
		.then(pageData => {
			Promise.all(pageData.data.sectionList.map(sectionId => {
				return this.$api.section(sectionId);
			})).then(sectionData => {
				Promise.all(sectionData.map(item => {
					return this.$api.format(item.data.format);
				})).then(formatData => {
					formatData.forEach(item => {
						var formatName = ele.data.format.slice(7);
						this.components.push(item.data.name);
					})
				})
				// sectionData.forEach(ele => {
				// 	const formatName = ele.data.format.slice(7);
				// 	this.components.push(ele.data.format);
				// });
			})
			Promise.all(pageData.data.sectionList.map(sectionId => {
				return this.$api.collaction(sectionId);
			})).then(collactionData => {
				collactionData.forEach(item => {
					this.data[formatName] = item.data;
				})
			})
		})

		// 数据简单版
		// this.$api.page(1)
		// .then(res => {
		// 	res.data.sectionList.forEach(item => {
		// 		const formatName = item.format.slice(7);
		// 		this.components.push(item.format);
		// 		this.data[formatName] = item.format.collection;
		// 	});
		// })
	}
}
</script>

<style lang="less">

</style>


