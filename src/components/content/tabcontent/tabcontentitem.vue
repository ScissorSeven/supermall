<template>
  <div class="tabcontentitem">
    <div class="title"><img :src="tabcontentitem.floor_title.image_src" alt="" @load="imageLoad"></div>
    <div class="list" >
      <img v-for="(item,index) in tabcontentitem.product_list" :key="index" 
      :src="item.image_src" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"tabcontentitem",
  props:{
    tabcontentitem:{
      type: Object,
        default() {
          return {
          }
        }
    }
  },
  methods: {
      imageLoad() {
        this.$bus.$emit('itemImageLoad')
      }
    }
}
</script>

<style>
  .tabcontentitem{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .title{
    width: 100%;
    padding-top: 5px;
  }
  .title img{
    width: 100%;
  }
  .list{
    width: 100%;
    height: 35vh;
    overflow: hidden;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start; */
  }
  .list img{
    /* display: flex; */
    width: 32%;
    float: left;
    padding: 2px;
  }
  .list img:nth-of-type(1){
    height: 100%;
  }
  .list img:nth-of-type(n+2){
    height: 50%;
  }
</style>