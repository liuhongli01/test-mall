<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue';
export default {
  components:{
    MainTabBar
  }
}
</script>
<style>
@import "./assets/css/base.css"
</style>
