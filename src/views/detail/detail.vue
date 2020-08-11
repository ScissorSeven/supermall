<template>
  <div class="page">
    <nav-bar bgcolor="red" class="home-nav">
      <img slot="left" src="~assets/img/tabbar/left.png" alt="" class="return" @click="back">
      <div slot="center">商品详情</div>
    </nav-bar>
    <myswiper :banners="banners">
      <swiper-slide v-for="(item,index) in banners" :key="index" slot="SwiperSlide" style="height:40vh;text-align:center">
        <a href="" >
          <img :src="item.pics_sma || noimg" alt="" style="height:100%;width:40vh">
        </a>
      </swiper-slide>
    </myswiper>
    <p class="price">￥{{price}}</p>
    <div class="content">
      <div class="text-left">
        <p class="text">{{text}}</p>
      </div>
      <div class="text-right">
        <img src="~assets/img/detail/Collection.png" alt="">
        <p style="margin:0;">收藏</p>
      </div>
    </div>
    <div class="goods_info">
      <p class="goos_info_title">
        图文详情
      </p>
      <div v-html='msg'></div>
    </div>
    <detail-bar :products="products"></detail-bar>
    <!-- <toast></toast> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import myswiper from "components/common/swiper.vue";
import {SwiperSlide} from 'vue-awesome-swiper';
import detailBar from './childComps/detailBar.vue';
// import toast from "components/common/toast/toast.vue";

import { getDetail } from "network/detail";
export default {
  name:"detail",
  components:{
    NavBar,
    myswiper,
    SwiperSlide,
    detailBar
  },
  data() {
    return {
      banners: [],
      price:0,
      text:null,
      msg:"",
      noimg:"/img/noimg.48ff491d.jpg",
      products:{
        cid:null,
        name:"",
        price:0,
        img:"",
        commit:1,
        checked:false
      },
      message:"添加购物车成功"
    };
  },
  methods:{
    back(){
      this.$router.back();
    }
  },
  created() {
    // 1.请求商品详情数据
    getDetail(this.$route.query.goods_id).then(res => {
      // this.result = res;
      this.banners = res.message.pics;
      this.price=res.message.goods_price;
      this.text=res.message.goods_name;
      this.msg=res.message.goods_introduce;

      this.products.cid=res.message.goods_id;
      this.products.name=res.message.goods_name;
      this.products.price=res.message.goods_price;
      this.products.img=res.message.pics[0].pics_sma;
    });
  }
}
</script>

<style scoped>
  .page{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home-nav{
    font-size: 16px;
    color: white;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .price{
    color: red;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
  .text-left{
    width: 80%;
    height: 45px;
    margin: 4px;
    border-right: 2px solid rgb(43, 41, 41);
    display: flex;
  }
  .text{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    width: 100%;
  }
  .content{
    width: 100%;
    height: 53px;
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .goos_info_title{
    font-size: 20px;
    color: red;
    font-weight: 700;
    padding: 5px;
  }
  .text-right{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .return{
    padding-left: 15px;
    padding-top: 3px;
  }
  .goods_info{
    position: relative;
  }
</style>