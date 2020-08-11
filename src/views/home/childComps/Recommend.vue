<template>
  <div class="recommend">
    <div v-for="(item,index) in catitems" :key="index" class="recommend-item">
      <img :src="item.image_src" alt="数据获取失败" :title="item.name" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name:"Recommend",
  data(){
    return {

    }
  },
  props:{
    catitems:{
      type: Array,
      default() {
        return []
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
  .recommend{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recommend-item{
    display: flex;
    flex: 1;
    padding: 10px;
  }
  .recommend-item img{
    width: 100%;
    height: 100%;
  }
</style>