<template>
	<div class="my-3">
    <b-container class="pb-5">
      <div 
        class="pb-3"
				>
        <b-link>文章列表</b-link>
        <i class="fas fa-angle-right px-2"></i>
        <small style="color:#999">{{ options[0].title }}</small>
      </div>
			<b-row>
        <!-- 文章内容 -->
        <b-col class="p-0">
					<h3 
            class="p-3"
            style="font-weight:bold;"
						>{{ options[0].title }}</h3>
					<b-card-text 
            class="pl-3 pb-3"
            style="color:#999;"
						>由{{ options[0].author }}发布于{{ options[0].date }}</b-card-text>
					<b-card 
						class="border-0 p-3"
						v-html="options[0].content"
						></b-card>
        </b-col>

        <!-- 推荐阅读 -->
        <b-col 
          cols="3"
          class="d-none d-md-block"
					>
          <b-card 
            class="border rounded-0"
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
    </b-container>
  </div>
</template>

<script>
export default {
	name: 'format-article',
	props: [
		'options',
		'recommend'
	],
};
</script>

<style lang="less">

</style>

