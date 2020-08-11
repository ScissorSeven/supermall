<template>
  <div id="app">
    <keep-alive exclude="goodslist,detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar.vue'
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
  @import "assets/css/base.css";
</style>
