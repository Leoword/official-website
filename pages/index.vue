<template>
  <div id="app">
    <page-header></page-header>
    <div id="content">
      qqq
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '~/components/Header.vue';
import PageFooter from '~/components/Footer.vue';

export default {
  // layout attribute set the layout of page
  // asyncData, fetch(change the store), head(meta info)
  // middleware before page render
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="less">
#app {
  position: relative;
  #content {
    margin-top: 50px
  }
}
</style>

