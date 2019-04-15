<template>
  <div>
    <h1>123123123123</h1>
    <b-card
      v-for="(item,index) in list"
      :key="index">
      {{item.title}}
    </b-card>
  </div>
</template>

<script>
export default {
	data() {
    return {
      list: [],
      pageindex: 3
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$api.testData1()
    }
  },
	name: 'format-atest',
	props: ['options']
}
</script>

<style lang="less">

</style>
