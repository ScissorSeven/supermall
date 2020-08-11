<template>
   <div class="tab">
     <div v-for="(item,index) in titles" 
     :key="index" 
     class="tab-item"
     :class="{active: index === currentIndex}"
     @click="itemClick(index)"
     >
       <span>{{item}}</span>
     </div>
   </div>
</template>

<script>
export default {
  name:"tabcontrol",
  props:{
    titles:{
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
}
</script>
  
<style>
  .tab{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    font-size: 16px;
    margin: 10px 0;
    background: #fff;
  }
  .tab-item{
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .tab-item > span{
    padding: 6px;
  }
  .active{
    color: red;
  }
  .active span{
    border-bottom: 2px solid red;
  }
</style>