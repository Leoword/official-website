<template>
	<div id="app">
		<component v-for="(name, index) in $components" :key="index" :is="name"
			:options="{image: 'https://picsum.photos/600/300/?image=25'}"
			:cardData="cardData"
			:cardCircleData="cardCircleData"
			:cardExtendData="cardCircleData"
			:carouselData="carouselData"
			:guess="guess"
			:contentDetailed="contentDetailed"
			:indexData="indexData"></component>
	</div>
</template>

<script>
import cardData from '../../components/staticdata/card.json'
import cardCircleData from '../../components/staticdata/card2.json'
import carouselData from '../../components/staticdata/carousel.json'
import guess from '../../components/staticdata/guess.json'
import contentDetailed from '../../components/staticdata/contentDetailed.json'
import indexData from '../../components/staticdata/index.json'
export default {
	fetch({store}) {

	},
	asyncData({app}) {
		return {
			cardData,
			cardCircleData,
			carouselData,
			guess,
			contentDetailed,
			indexData,
		}
	},
	mounted() {
		
	}
}
</script>

<style lang="less">

</style>


