<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper-menu">
    <!-- slides 列表项 -->
    <slot name="SwiperSlide"></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';   //引入样式

export default {
  name:"myswiper",
  components:{
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: { 
          pagination: {        //设置小圆点
            el: '.swiper-pagination',    
            clickable: true    //可点击跳转
          },
          loop: true,          //图片循环
          autoplay: {         //轮播
            delay: 2500,      //间隔
            disableOnInteraction: false
          }
        }
    }
  },
  props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
  // computed:{
  //   swiper() {
  //       return this.$refs.mySwiper.$swiper
  //     }
  // },
  mounted() {
      // console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style>
  .swiper-menu img{
    width: 100%;
  }
    .swiper-pagination-bullet-active {    /* 设置小圆点颜色 */
    background :red
  } 
  
</style>