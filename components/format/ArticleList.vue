<template>
  <div class="overflow-auto format-article-list">
    <b-container>
      <h1
        class="text-center my-5"
        v-if="heading">{{heading}}</h1>
      <b-row>
        <b-col class="pt-3">
          <b-card
            id="list"
            v-for="(list,index) in lists"
            :key="index"
            class="border-0">
            <h4 :title="list.title">
              <b-link>{{list.id}}{{list.title}}</b-link>
            </h4>
            <b-card-text class="list-summary"><small>{{list.introduction}}</small></b-card-text>
            <b-card-text><small>由{{list.author}}发布于{{list.date}}</small></b-card-text>
          </b-card>
        </b-col>
        <!-- 推荐阅读 -->
        <b-col 
          cols="3"
          class="d-none d-md-block pt-5">
          <b-card
            class="rounded-0"
            body-class="pb-0">
            <h5 class="mb-4">推荐阅读</h5>
            <b-card
              no-body
              class="border-0 pb-4"
              v-for="(item,index) in recommend"
              :key="index">
              <b-link :href="item.url">
                <b-img
									:src="item.url"
									fluid />
              </b-link>
              <b-card-text class="text-center mt-3"><small>{{item.text}}</small></b-card-text>
            </b-card>
          </b-card>
        </b-col>
      </b-row>
      <b-pagination
        v-model="currentPage"
        :total-rows="index.length"
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
  props: ['options','recommend'],
	data() {
    return {
      heading: '',
      perPage: 8,
      currentPage: 1,
      index: this.options
    }
  },
  computed: {
    lists () {
      return this.index.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
  },
  methods: {
    windowMove () {
      let position = document.documentElement.scrollTop;
      const scroll = setInterval(function () {
        if (position < document.documentElement.scrollTop) {
          clearInterval(scroll)
        }

        window.scrollBy(0, -25);
        position = document.documentElement.scrollTop;

        if (position === 0) {
          clearInterval(scroll);
        }
      },10)
    }
  },
}
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