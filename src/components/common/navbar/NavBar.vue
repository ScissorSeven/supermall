<template>
  <div class="nav" :style="color">
      <div class="left"><slot name="left"></slot></div>
      <div class="centent"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"NavBar",
    props:{
        bgcolor:{
            type:String,
            default:"red"
        }
    },
    data(){
        return{
           color:{backgroundColor:this.bgcolor} 
        }
    },
    computed:{
        
    }
}
</script>

<style>
    .nav{
        width: 100%;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
    }
    .left{
        flex: 2;
    }
    .centent{
        display: flex;
        flex: 8;
        justify-content: center;
        align-items: center;
    }
    .right{
        flex: 2;
    }
</style>