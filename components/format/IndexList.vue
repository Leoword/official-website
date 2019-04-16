<template>
  <div class="overflow-auto format-index-list">
    <b-container>
      <h1
			  class="text-center my-5"
			  v-if="heading">{{heading}}</h1>
      <b-row>
        <b-col>
          <b-card
            id="list"
            v-for="(list,index) in lists"
            :key="index"
            class="border-top-0 border-left-0 border-right-0 rounded-0">
            <b-link style="font-size:18px;">
              {{list.id}}{{list.title}}
            </b-link>
            <b-card-text ><small>{{list.introduction}}</small></b-card-text>
            <b-card-text><small>由{{list.author}}发布于{{list.date}}</small></b-card-text>
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card 
            class="border rounded-0"
            body-class="pb-0">
            <h5 class="mb-4">猜您喜欢</h5>
            <b-card
              no-body
              class="border-0 pb-4"
              v-for="(item,index) in options.guess"
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
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'format-indexlist',
  props: ['options'],
	data() {
    return {
      heading: 'List',
      perPage: 8,
      currentPage: 1,
      index: this.options.index
    }
  },
  computed: {
    lists () {
      return this.index.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
  }
  // watch: {
  //   lists: function () {
  //     this.windowMove()
  //   }
  // },
  // methods: {
  //   windowMove () {
  //     console.log('22222222222')
  //     window.moveBy(0, -300)
  //     console.log('11111111111')
      
  //   }
  // },
}
</script>

<style lang="less">

</style>