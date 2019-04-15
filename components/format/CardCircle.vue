<template>
  <div class="format-card-circle">
    <b-container class="py-5">
      <h1 
        class="text-center my-5"
        v-if="heading">{{heading}}</h1>
      <b-row
        class="mb-5">
        <b-col v-for="(item,index) in cardCircleData"
          class="text-center circle-card"
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
        </b-col>
      </b-row>
    </b-container>	
  </div>
</template>

<script>
export default {
  name: 'format-card-circle',
  props: ['cardCircleData'],
	data () {
		return {
			// data,
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

      this.radius = Math.min(height, width) ;
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
	background-color: #f1f1f1;
	.circle-card {
    min-height: 250px;
    overflow: hidden;
    a {
      box-sizing: content-box;
      display: inline-block;
      overflow: hidden;
      border: 10px solid rgba(0, 0, 0, .2);
    }
	}
	
	img {
    &:hover {
      transition: all 0.2s;
      transform: scale(1.1);
    }
	}	
}
</style>

