<template>
  <div class="categoryitem" >
    
    <category-left class="category-left" :CategoriesData="CategoriesData"
    @item-click="cpnClick"
    ></category-left>
  
    <category-right class="category-right" :RightData="RightData.children"></category-right>
    
  </div>
</template>

<script>
import categoryLeft from 'components/common/Category/categoryLeft.vue';
import categoryRight from 'components/common/Category/categoryRight.vue';

import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  name:'categroyitem',
  components:{
    categoryLeft,
    categoryRight,
    Scroll
  },
  data(){
    return {
      RightData:{},
      dataindex:0
    }
  },
  props:{
    CategoriesData:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    cpnClick(index) {
      this.dataindex = index;
      this.RightData=this.CategoriesData[this.dataindex];
    }
  },
  updated() {
    this.RightData=this.CategoriesData[this.dataindex];
  }
}
</script>

<style>
  .categoryitem{
    display: flex;
    justify-content: center;
    height: 100vh;
    padding-top: 88px;
    padding-bottom: 49px;
  }
  .category-left{
    overflow: hidden;
    display: flex;
    flex: 7;
  }
  .category-right{
    display: flex;
    flex: 17;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  }
  /* .conleft {
    overflow: hidden;
    display: flex;
    flex: 7;
    height: calc(100vh - 137px);
  } 
  .conright {
    overflow: hidden;
    display: flex;
    flex: 17;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 137px);
  } */
  /* .content{
    width: 100%;
    height: 1350px;
  } */
</style>