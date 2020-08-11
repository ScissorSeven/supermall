<template>
  <div>
    <nav-bar bgcolor="red" class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <search class="search"></search>
    <categoryitem :CategoriesData="CategoriesData"></categoryitem>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue";
  import Search from "components/common/search/search.vue";
  import Scroll from 'components/common/scroll/Scroll.vue';
  import categoryitem from './childComps/categoryitem.vue';

  import { getCategoryData } from "network/category";

  export default {
    name: "Category",
    components:{
      NavBar,
      Scroll,
      Search,
      categoryitem
    },
    data(){
      return {
        CategoriesData:[]
      }
    },
    created() {
      // 1.请求分类数据
      getCategoryData().then(res => {
        // this.result = res;
        this.CategoriesData = res.message;
      });
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .content{
    overflow: hidden;
  }
  .search{
    position: fixed;
    top:44px;
    z-index: 1;
  }
  .category-nav{
    font-size: 16px;
    color: white;
    position: fixed;
    top: 0;
    z-index: 1;
  }
  /* .categoryitem{
    margin-top: 88px;
  } */
</style>
