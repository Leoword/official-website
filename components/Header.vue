<template>
  <div id="header" :style="{
    'min-height': `${height}px`,
    'line-height': `${height}px`
  }">
  <b-navbar toggleable="md" class="py-0">
    <b-navbar-brand href="#" id="logo" class="pt-0">
      <img src="~/assets/images/logo.png" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" @click.native="collapsed = !collapsed"
      ref="collapseButton"
      class="nav-collapsing"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="nav-collapsing">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
        <custom-dropdown></custom-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
import CustomDropdown from '~/components/dropdown/Menu.vue';

export default {
  data() {
    return {
      isTop: true,
      height: 50,
      collapsed: false
    }
  },
  props: ['categoryList'],
  components: {
    CustomDropdown
  },
  mounted() {
    window.addEventListener('scroll',  () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      
      this.isTop = scrollTop < this.height / 2;
		});
  }
}
</script>


<style lang="less">
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
  z-index: 100;
  background-color: #fff;
  border-color: #e4eaec;

  a {
    color: #8f8f8f;
  }

  #logo {
    height: 100%;
    width: auto;
    float: left;
    margin-left: 8%;
    img {
      width: 40px;
    }
  }
  .navbar {
    #nav-collapse.show {
      max-height: 480px;
      width: auto;
      margin: 10px 8%;
      overflow-y: scroll;
      box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
      display: block;
    }
  
    .nav-collapsing {
      margin-right: 8%
    }
    .nav-link {
      padding: 0 10px !important;
    }
    .navbar-toggler {
      border: none;
    }
    button:focus {
      outline: none !important;
    }
  }
}
</style>