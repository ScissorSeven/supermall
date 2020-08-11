<template>
  <div class="tatal" v-show="isShow">
    <svg t="1597054095671" class="icon" viewBox="0 0 1408 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3114" width="32" height="32"><path d="M1337.6 38.4c-524.8 441.6-812.8 704-812.8 704l-384-326.4L57.6 492.8l467.2 499.2c409.6-448 844.8-870.4 844.8-870.4L1337.6 38.4z" p-id="3115" fill="#e6e6e6"></path></svg>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name:"toast",
  props:{
    // message:{
    //   type:String,
    //   define(){
    //     return "成功"
    //   }
    // }
  },
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration=2000){
      this.message = message;
      this.isShow = true;
      //设置定时器使其自动消失
      setTimeout(()=>{
        this.isShow = false;
        this.message = '';
      },duration)
    }
  
  }
}
</script>

<style scoped>
  .tatal{
    width: 35vw;
    height: 15vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10%;
    z-index: 999;
  }
  .tatal p{
    font-size: 16px;
    color: #fff;
    margin: 5px;
  }
</style>