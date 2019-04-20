<template>
  <div class="format-card-circle">
    <b-container class="pt-5 pb-4">
      <h1 
        class="text-center mb-5"
        v-if="heading">{{heading}}</h1>
      <b-row
        class="mt-5">
        <b-col
          v-for="(item,index) in options"
          class="text-center circle-card"
          cols=6
          lg=3
          ref="cardList"
          :key="index">
          <b-link
            class="rounded-circle"
            :href="item.url"
            :style="{
              width: `${radius}px`,
              height: `${radius}px`
            }">
            <b-img 
              class="rounded-circle"
              :src="item.url"
              :style="{
                width: `${radius}px`,
                height: `${radius}px`
              }"
              fluid />
          </b-link>
          <b-card-text class="text-center pt-2">{{item.title}}</b-card-text>
        </b-col>
      </b-row>
    </b-container>	
  </div>
</template>

<script>
export default {
  name: 'format-card-circle',
  props: ['options'],
	data () {
		return {
      heading: 'Card-Circle',
      radius: 0
		}
	},
  methods: {
    setRadius() {
      const {
        offsetHeight: height,
        offsetWidth: width
      } = this.$refs.cardList[0];

      this.radius = Math.min(height, width);
    }
  },
  mounted() {
    window.addEventListener('resize', this.setRadius);
    this.setRadius();
  },
  destroyed() {
    window.removeEventListener('resize', this.setRadius);
  }
}
</script>

<style lang="less">
.format-card-circle {
  background-color: #F2F4F5;
	.circle-card {
    min-height: 200px;
    overflow: hidden;
    a {
      transition: all 0.2s;
      box-sizing: content-box;
      display: inline-block;
      overflow: hidden;
      border: 7px solid rgba(0, 60, 80, 0.8);
      &:hover {
        border: 7px solid rgba(0,60, 80, .3);
      }
    }
	}
	
	img {
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>

