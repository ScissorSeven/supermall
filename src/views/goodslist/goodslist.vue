<template>
  <div class="page">
    <nav-bar bgcolor="red" class="home-nav">
      <img slot="left" src="~assets/img/tabbar/left.png" alt="" class="return" @click="back">
      <div slot="center">商品列表</div>
    </nav-bar>
    <tabcontrol :titles="['综合', '销量', '价格']"></tabcontrol>
    <goodsitems :goodslistData="goodslistData" class="goods"></goodsitems>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import tabcontrol from "components/content/tabControl.vue";
import goodsitems from './childComps/goodsitems.vue';

import { getGoodsListData } from "network/goodslist";

export default {
  name:"goodslist",
  components:{
    NavBar,
    tabcontrol,
    goodsitems
  },
  methods:{
    back(){
      this.$router.back();
    }
  },
  data(){
    return {
      goodslistData:[],
      cid:this.$route.query.cid
    }
  },
  created() {
    // 1.请求商品列表数据
    getGoodsListData(this.cid).then(res => {
      // this.result = res;
      this.goodslistData = res.message.goods;
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
    z-index: 1;
  }
  .return{
    padding-left: 15px;
    padding-top: 3px;
  }
  .goods{
    width: 100%;
  }
</style>