<template>
	<div class="format-class position-relative">
    <b-card
      no-body
      class="format-class-link"
      >
      <b-img 
        :src="options.image"
        fluid-grow 
        />
    </b-card>
    <div class="format-class-label position-absolute fixed-bottom">
      <b-container>
        <b-row>
          <b-col
            v-for="(nav,index) in options.navbar"
            :key="index"
            :class="{active:indexActive === index,'class-label-tap': true}"
            @click="activeClass(index)"
						>
            <b-link
              class="text-white"
              :to="nav.url"
              >
              <b-card-text class="text-center py-3">
                {{ nav.title | substr }}
              </b-card-text>
            </b-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import {getSubStr} from './mixin.js';

export default {
	name: 'format-category',
	filters: {
		substr(value) {
			return getSubStr(value, 10, 6);
		}
	},
	props: ['options'],
	data() {
		return {
			indexActive: 0
		};
	},
	methods: {
		activeClass (index) {
			this.indexActive = index;
		}
	},
	async asyncData(options) {
		const {image, navbar} = options;

		return {
			image, navbar
		};
	}
};
</script>

<style lang="less">
.format-class {
	height: 400px;
	overflow: hidden;
  .format-class-label {
    background-color: rgba(0, 0, 0, 0.5);
    .class-label-tap {
			transition: all 0.2s;
      a {
        text-decoration: none;
        font-size: 14px;
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
