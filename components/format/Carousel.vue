<template>
	<div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        v-for="(item,index) in options.carousel"
        :key="index"
        :img-src="item.url"
        style="max-height:600px">
				<h1>{{item.text}}</h1>
			</b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'format-carousel',
  props: ['options'],
	data() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="less" scoped>
.img-fluid {
  height: 0;
}
</style>

