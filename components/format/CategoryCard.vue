<template>
	<div class="format-class-card">
    <b-container style="" class="py-5">
      <h1 
        class="text-center pb-3 mb-4 border-bottom"
        v-if="heading">{{heading}}</h1>
      <b-row>
        <b-col
          v-for="(nav,index) in options"
          :key="index"
          class="text-center nav-img-ele pt-3">
          <b-link>
            <b-img
              class="rounded-circle"
              :src="nav.url" 
              style="height:60px;width:60px;"/>
            <b-card-text class="text-center pt-2">{{nav.title}}</b-card-text>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'format-category-card',
  props: ['options'],
	data() {
    return {
      heading: 'Choose Your Area of Interest'
    }
  }
}
</script>

<style lang="less">
.format-class-card {
  // background-color: #00758F;
  .nav-img-ele {
    &:hover {
      img {
        transition: all 0.1s;
        transform: scale(1.2);
      }
    }
    a {
      color: #999;
    }
  }
}
</style>
