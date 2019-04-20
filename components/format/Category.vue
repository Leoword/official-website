<template>
	<div class="format-class position-relative">
    <b-link 
      class="format-class-link"
      :href="options[0].url">
      <b-img 
        :src="options[0].url"
        fluid-grow />
    </b-link>
    <div class="format-class-label position-absolute fixed-bottom">
      <b-container>
        <b-row>
          <b-col
            v-for="(nav,index) in options"
            :key="index"
            :class="{active:indexActive === index,'class-label-tap': true}"
            @click="activeClass(index)">
            <b-link class="text-white">
              <b-card-text class="text-center py-3">{{nav.title}}</b-card-text>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'format-category',
  props: ['options'],
	data() {
    return {
      indexActive: 0
    }
  },
  methods: {
    activeClass (index) {
      this.indexActive = index;
    }
  }
}
</script>

<style lang="less">
.format-class {
  .format-class-label {
    background-color: rgba(0, 0, 0, 0.5);
    .class-label-tap {
      a {
        text-decoration: none;
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
  .format-class-link {
    img {
      max-height: 400px;
    }
  }
  .active {
    background-color: #3f82fc !important;
  }
}
</style>
