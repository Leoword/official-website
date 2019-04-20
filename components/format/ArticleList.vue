<template>
  <div class="overflow-auto format-article-list">
    <b-container>
      <h1
        v-if="heading"
        class="text-center my-5"
        >{{ heading }}</h1>
      <b-row>
        <b-col class="pt-3">
          <b-card
            v-for="(list,index) in lists"
            id="list"
            :key="index"
            class="border-0"
            >
            <h4 :title="list.title">
              <b-link to="/article">{{ list.id }}{{ list.title }}</b-link>
            </h4>
            <b-card-text class="list-summary">
              <small>{{ list.abstract }}</small>
            </b-card-text>
            <b-card-text><small>由{{ list.author }}发布于{{ list.date }}</small></b-card-text>
          </b-card>
        </b-col>
        <!-- 推荐阅读 -->
        <b-col 
          cols="3"
          class="d-none d-md-block pt-5"
					>
          <b-card
            class="rounded-0"
            body-class="pb-0"
            >
            <h5 class="mb-4">推荐阅读</h5>
            <b-card
              v-for="(item,index) in recommend"
              :key="index"
              no-body
              class="border-0 pb-4"
              >
              <b-link :href="item.image">
                <b-img
									:src="item.image"
									fluid 
                  />
              </b-link>
              <b-card-text class="text-center mt-3">
                <small>{{ item.title }}</small>
              </b-card-text>
            </b-card>
          </b-card>
        </b-col>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="data.length"
        :per-page="perPage"
        aria-controls="list"
        align="center"
        class="mt-3"
        @click.native="windowMove"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'format-article-list',
	props: [
		'options',
		'recommend'
	],
	data() {
		return {
			heading: '',
			perPage: 8,
			currentPage: 1,
			data: this.options
		};
	},
	computed: {
		lists () {
			return this.data.slice(
				(this.currentPage - 1) * this.perPage,
				this.currentPage * this.perPage
			);
		},
	},
	methods: {
		windowMove () {
			let position = document.documentElement.scrollTop;
			const scroll = setInterval(function () {
				if (position < document.documentElement.scrollTop) {
					clearInterval(scroll);
				}

				window.scrollBy(0, -25);
				position = document.documentElement.scrollTop;

				if (position === 0) {
					clearInterval(scroll);
				}
			},10);
		}
	},
};
</script>

<style lang="less">
.format-article-list {
  .list-summary {
    // 没有效果
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
}
</style>