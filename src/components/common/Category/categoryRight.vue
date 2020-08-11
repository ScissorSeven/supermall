<template>
  <div>
    <scroll class="con" ref="scroll">
      <div v-for="(item,index) in RightData" :key="index" class="bigcontent">
        <p class="listtitle">/{{item.cat_name}}/</p>
        <div class="item-content">
          <div class="item" v-for="(value,i) in item.children" :key="i" @click="itemclick(value.cat_id)">
            <img :src="value.cat_icon" alt="" @load="imageLoad">
            <p class="listtitle">{{value.cat_name}}</p>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script scoped>
import Scroll from 'components/common/scroll/Scroll.vue'
export default {
  name:"categoryRight",
  components:{
    Scroll
  },
  props:{
    RightData:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    itemclick(cid){
      this.$router.push({
        path: '/goodslist',
        query: {
          cid:cid
        }
      })
    }
  },
  
}
</script>

<style>
  .bigcontent{
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
  }
  .listtitle{
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .item-content{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .item{
    width: 33%;
    padding: 10px;
    box-sizing: border-box;
  }
  .item>img{
    width: 100%;
  }
  .con{
    overflow: hidden;
    height: calc(100vh - 137px);
    width: 100%;
  }
</style>