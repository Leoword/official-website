<template>
	<div class="banner-box">

    <b-link class="banner-link">
      <b-img src="https://picsum.photos/1024/480/?image=52"
      fluid-grow></b-img>
    </b-link>
    <div class="banner-text">
      <h1>Banner-text</h1>
    </div>
  </div>
</template>

<script>

export default {
	data() {
      return {
      }
    },
    methods: {
		},
	name: 'format-banner',
	props: ['options']
}
</script>

<style lang="less">

.banner-box {
  position: relative;
  .banner-link img {
    max-height: 600px;
  }
  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}

</style>

