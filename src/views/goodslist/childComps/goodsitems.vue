<template>
  <div>
    <div class="goodsitems" v-for="(item,index) in goodslistData" :key="index" @click="itemclick(item.goods_id)">
      <div class="imgitem">
        <img :src="item.goods_small_logo || noimg" alt="">
      </div>
      <div class="text">
        <p class="name">{{item.goods_name}}</p>
        <p class="price">￥{{item.goods_price}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"goodsitems",
  props:{
    goodslistData:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    itemclick(goods_id){
      this.$router.push({
        path: '/detail',
        query: {
          goods_id:goods_id
        }
      })
    }
  },
  data(){
    return {
      noimg:'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg',
      noimg2:'/img/noimg.48ff491d.jpg'
    }
  }
}
</script>

<style>
  .goodsitems{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #ccc;
  }
  .imgitem{
    display: flex;
    /* flex: 5; */
    width: 35vw;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
  .imgitem img{
    width: 63%;
  }
  .text{
    display: flex;
    /* flex: 7; */
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 65vw;
    flex-wrap: wrap;
    font-size: 16px;
  }
  p{
    margin-top: 0;
    margin-bottom: 10px;
  }
  .name{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .price{
    color: red;
  }
</style>