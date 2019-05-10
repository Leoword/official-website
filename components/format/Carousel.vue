<template>
	<div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
			<b-link>
				<b-carousel-slide
					v-for="(item,index) in options"
					:key="index"
					:img-src="item.image"
					>
					<h1>{{ item.text | substr }}</h1>
				</b-carousel-slide>
			</b-link>
    </b-carousel>
  </div>
</template>

<script>
import {getSubStr} from './mixin.js';

export default {
	name: 'format-carousel',
	props: ['options'],
	data() {
		return {
			slide: 0,
			sliding: null,
		};
	},
	filters: {
		substr(value) {
			return getSubStr(value, 80, 30);
		}
	},
	methods: {
		onSlideStart() {
			this.sliding = true;
		},
		onSlideEnd() {
			this.sliding = false;
		}
	},
	async asyncData(options) {
		return options;
	}
};
</script>

<style lang="less" scoped>
#carousel {
	max-height: 400px;
	overflow: hidden;
	.carousel-item {
		max-height: 400px;
		overflow: hidden;
	}
}
.img-fluid {
  height: 0;
}
.carousel-item {
	image {
		max-height: 200px;
	}
}
</style>

