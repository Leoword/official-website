<template>
	<div>
    <b-carousel
      v-model="slide"
      class="format-carousel"
      :interval="3000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
			<b-carousel-slide
				v-for="(item, index) in options"
				:key="index"
				:style="`background-image:url(${ item.image });`"
			>
				<h1>{{ item.text | substr }}</h1>
			</b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {getSubStr} from './mixin.js';

export default {
	name: 'format-carousel',
	filters: {
		substr(value) {
			return getSubStr(value, 80, 30);
		}
	},
	props: ['options'],
	data() {
		return {
			slide: 0,
			sliding: null,
		};
	},
	methods: {
		onSlideStart() {
			this.sliding = true;
		},
		onSlideEnd() {
			this.sliding = false;
		}
	}
};
</script>

<style lang="less">
.format-carousel {
	max-height: 400px;
	overflow: hidden;

	.carousel-item {
		height: 400px;
		background-repeat: no-repeat;
		background-size: cover;
	}
}
@media screen and (max-width:576px) {
	.format-carousel .carousel-item {
		height: 200px;
	}
}
</style>

