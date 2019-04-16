<template>
	<div class="my-5">
    <b-container class="pb-5" >
			<b-row>
        <b-col class="border p-0">
					<h2 class="p-3">{{options.contentDetailed[0].title}}</h2>
					<b-card-text 
            class="border-bottom pl-3 pb-3">由{{options.contentDetailed[0].author}}发布于{{options.contentDetailed[0].date}}</b-card-text>
					<b-card 
						v-html="options.contentDetailed[0].text"
						class="border-0 p-3"></b-card>
        </b-col>

        <!-- 猜您喜欢 -->
        <b-col 
          cols="3">
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
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'format-contentdetailed',
  props: ['options'],
	data() {
    return {
      heading: 'Content',
    }
  },
  created () {
    
  },
  methods: {
    
	}
}
</script>

<style lang="less">

</style>

