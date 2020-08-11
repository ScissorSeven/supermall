<template>
  <div>
    <div class="bottomBar">
      <div class="icon">
        <img src="~assets/img/detail/客服.png" alt="">
        <p>客服</p>
      </div>
      <div class="icon">
        <img src="~assets/img/detail/分享.png" alt="">
        <p>分享</p>
      </div>
      <div class="icon" @click="itemclick">
        <img src="~assets/img/detail/cart.png" alt="">
        <p>购物车</p>
      </div>
      <div class="buttom1" @click="addcart"><span>加入购物车</span></div>
      <div class="buttom2"><span>立即购买</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailBar",
  props:{
    products:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return {
      duration:2000
    }
  },
  methods:{
    //跳转购物车
    itemclick(){
      this.$router.push('/cart')
    },
    //加入购物车
    addcart(){
      this.$store.commit('addcart', this.products,this.duration);
      //直接调用toast插件的方法，显示成功
      this.$toast.show("添加购物车成功",1500);

      //加入购物车时便计算全选按钮状态
      this.$store.commit('selectAll');
    }
  }
}
</script>

<style>
  .bottomBar{
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    background-color: #fff;
  }
  .icon{
    display: flex;
    flex: 6;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 3px;
  }
  .icon p{
    margin: 0;
    font-size: 14px;
  }
  .icon img{
    width: 20px;
    height: 20px;
    padding-bottom: 3px;
  }
  .buttom1{
    display: flex;
    flex: 15;
    background: rgb(255, 165, 0);
    height: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    align-content: center;
  }
  .buttom2{
    display: flex;
    flex: 15;
    background: rgb(235, 68, 80);
    height: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    align-content: center;
  }
  span{
    line-height: 49px;
  }
</style>