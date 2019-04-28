<template>
	<div class="format-banner">
    <b-link class="banner-link">
      <b-img 
        :src="options[0].URL"
        fluid-grow 
        />
    </b-link>
    <div class="banner-text">
      <h1>{{ options[0].text }}</h1>
    </div>
  </div>
</template>

<script>

export default {
	name: 'format-banner',
	props: ['options'],
};
</script>

<style lang="less">
.format-banner {
  position: relative;
  .banner-link img {
    max-height: 300px;
  }
  .banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>

