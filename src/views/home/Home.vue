<template>
  <div>
    <nav-bar class="navstyle">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper-vue :banners="banners"></home-swiper-vue>
    <recommend-view-vue :recommends="recommends"></recommend-view-vue>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiperVue from './childComps/HomeSwiper.vue';
import RecommendViewVue from './childComps/RecommendView.vue';
import { getHomeMultidata } from 'network/home';
export default {
  components:{
    NavBar,
    HomeSwiperVue,
    RecommendViewVue
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  created(){
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
  }
}
</script>

<style>
.navstyle{
  background-color: var(--color-tint);
  color: #fff;
}

</style>