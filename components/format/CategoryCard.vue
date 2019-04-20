<template>
	<div class="format-class-card py-3">
    <b-container>
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

    }
  }
}
</script>

<style lang="less">
.format-class-card {
  background-color: #dee0e0;
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
