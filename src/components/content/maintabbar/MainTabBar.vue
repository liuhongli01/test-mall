<template>
  <tab-bar>
    <tab-bar-item path="/home" itemcolor="deeppink">
      <img src="~assets/img/tabbar/home.svg" slot="item-ico">
      <img src="~assets/img/tabbar/home_active.svg" slot="item-ico-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" itemcolor="deeppink">
      <img src="~assets/img/tabbar/category.svg" slot="item-ico">
      <img src="~assets/img/tabbar/category_active.svg" slot="item-ico-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" itemcolor="deeppink">
      <img src="~assets/img/tabbar/shopcart.svg" slot="item-ico">
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-ico-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" itemcolor="deeppink">
      <img src="~assets/img/tabbar/profile.svg" slot="item-ico">
      <img src="~assets/img/tabbar/profile_active.svg" slot="item-ico-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>