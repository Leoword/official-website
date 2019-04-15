<template>
	<div class="format-contact">
    <b-container>
			<h1 
        class="text-center my-5"
        v-if="heading">{{heading}}</h1>
      <b-row>
        <b-col class="border p-3">
          <b-img src="https://picsum.photos/600/200/?image=30" fluid></b-img>
        </b-col>
        <b-col class="border p-3">
          <b-card-text>天津橙子科技有限公司</b-card-text>
          <b-card-text>地址:</b-card-text>
          <b-card-text>电话:</b-card-text>
          <b-card-text>邮箱:</b-card-text>
          <b-card-text>网址:</b-card-text>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
	data() {
    return {
      heading: 'Contact'
    }
  },
  methods: {
    
  },
	name: 'format-contact',
	props: ['options']
}
</script>

<style lang="less">

</style>
