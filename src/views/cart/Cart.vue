<template>
  <div class="page">
    <nav-bar bgcolor="red" class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <cart-list :cartList="cartList" v-if="cartList.length>0"></cart-list>
    <div v-else style="width:100%">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594048608291&di=4bcf56357f9a36d9d71a47d4574483e7&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F05%2F23%2F0d2019a7ca7937adaf34a3b15fd7b92e.jpg" 
        alt=""
        style="width:100%"
        >
        <div style="width: 100%;text-align: center; font-weight: 500;font-size: 18px;position: fixed;top: 58%;">
          你的购物车空空如也，快去首页逛逛吧！
        </div>
    </div>
    <cartbottom class="cartbottom" :cartList="cartList"></cartbottom>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import cartList from './childComps/cartList.vue';
import cartbottom from './childComps/cartbottom.vue';

  export default {
    name: "Cart",
    components:{
      NavBar,
      cartList,
      cartbottom
    },
    data(){
      return{
        cartList:this.$store.state.cartList
      }
    }
  }
</script>

<style scoped>
  .page{
    padding-top: 44px;
    padding-bottom: 98px;
  }
  .home-nav{
    font-size: 16px;
    color: white;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .cartbottom{
    position: fixed;
    bottom:49px;
  }
</style>
