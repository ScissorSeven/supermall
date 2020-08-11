<template>
  <div class="home">
    <nav-bar bgcolor="red" class="home-nav">
      <div slot="center">商城首页</div>
    </nav-bar>
    <search class="search"></search>
    <scroll class="con" ref="scroll">
      <myswiper :banners="banners">
        <swiper-slide v-for="(item,index) in banners" :key="index" slot="SwiperSlide">
          <a href="">
          <img :src="item.image_src" alt="">
        </a>
        </swiper-slide>
      </myswiper>
      <recommend :catitems="catitems"></recommend>
      <tabcontrol :titles="['时尚女装', '户外运动', '箱包配饰']" class="tab" @tabClick="tabClick"></tabcontrol>
      <tabcontent :tabcontent="tabcontent[index]"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Search from "components/common/search/search.vue";
// import HomeSwiper from "./childComps/HomeSwiper.vue";
import myswiper from "components/common/swiper.vue";
import {SwiperSlide} from 'vue-awesome-swiper'


import Recommend from "./childComps/Recommend.vue";
import tabcontrol from "components/content/tabControl.vue";
import tabcontent from "components/content/tabcontent/tabcontent.vue"

import Scroll from 'components/common/scroll/Scroll.vue'

import { getHomeSwiperData } from "network/home";
import { getCatitems } from "network/home";
import { getTabcontent } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Search,
    // HomeSwiper,
    myswiper,
    SwiperSlide,
    Recommend,
    tabcontrol,
    tabcontent,
    Scroll
  },
  data() {
    return {
      banners: [],
      catitems: [],
      tabcontent:[],
      index:0
    };
  },
  created() {
    // 1.请求多个数据
    getHomeSwiperData().then(res => {
      // this.result = res;
      this.banners = res.message;
    });
    getCatitems().then(res => {
      this.catitems = res.message;
    });
    getTabcontent().then(res => {
      this.tabcontent = res.message;
    })
  },
  mounted(){
    // 1.图片加载完成的事件监听
    this.$bus.$on('itemImageLoad', () => {
      //this.$refs.scroll是拿到scroll组件对象
      this.$refs.scroll.refresh()
    })
  },
  methods:{
    tabClick(index){
      this.index=index;
    }
  }
};
</script>

<style scoped>
  .home-nav{
    font-size: 16px;
    color: white;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  .search{
    position: fixed;
    top:44px;
    z-index: 1;
  }
  .home{
    /* padding-top: 88px;
    padding-bottom: 49px; */
    height: 100vh;
    position: relative;
  }
  .tab{
    position: sticky;
    top:88px
  }
  .con {
    overflow: hidden;
    /* margin-top: 88px; */
    position: absolute;
    top:88px;
    bottom: 49px;
    left: 0;
    right: 0;
  }  
</style>
