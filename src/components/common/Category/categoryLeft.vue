<template>
  <div>
    <scroll class="con" ref="scroll">
      <ul>
        <li v-for="(item,index) in CategoriesData" :key="index" 
        :class="{active2: index === currentIndex}"
        @click="itemClick(index)">
          {{ item.cat_name }}
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'

export default {
  name:"categoryLeft",
  components:{
    Scroll
  },
  data(){
    return {
      currentIndex:0
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
  methods:{
    itemClick(index){
      this.currentIndex = index;
      //将index传给父组件
      this.$emit('item-click', index);
    }
  },
  updated(){
    this.$refs.scroll.refresh();
  }
}
</script>

<style>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li{
    text-align: center;
    line-height: 45px;
    font-size: 16px;
  }
  .active2{
    color: red;
    border-left: 3px solid red;
  }
  .con{
    overflow: hidden;
    height: calc(100vh - 137px);
    width: 100%;
  }
</style>